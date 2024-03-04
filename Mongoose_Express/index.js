// Import required modules
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Product = require('./models/product');
const fs = require('fs');

// Multer for handling file uploads
const multer = require('multer');

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Multer upload configuration
const upload = multer({ storage: storage });

// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!")
        console.log(err)
    });

// Set up views directory and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware for parsing request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware for handling HTTP method overrides
app.use(methodOverride('_method'));

// Middleware for serving static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route to display all products with pagination
app.get('/products', async (req, res) => {
    // Pagination parameters
    const perPage = 6; // Number of products per page
    const page = parseInt(req.query.page) || 1; // Current page number, default to 1 if not provided

    // Query products from database
    const totalProducts = await Product.countDocuments(); // Total number of products
    const totalPages = Math.ceil(totalProducts / perPage); // Calculate total pages
    const products = await Product.find({})
                                   .skip((page - 1) * perPage)
                                   .limit(perPage);

    // Render the products index view with data
    res.render('products/index', { products, totalPages, currentPage: page });
});

// Route to render form for adding new product
app.get('/products/new', (req, res) => {
    res.render('products/new', { product: {} });
});

// Route to handle adding a new product
app.post('/products', upload.single('image'), async (req, res) => {
    // Request body parameters
    const { name, price, category } = req.body;

    // Validation checks
    if (!name || !price || !category) {
        return res.status(400).send('Name, price, and category are required');
    }
    if (isNaN(price) || price <= 0) {
        return res.status(400).send('Price must be a positive number');
    }

    // Create new product instance
    const newProduct = new Product({
        name,
        price,
        category,
        description: req.body.description,
        image: req.file ? req.file.filename : null
    });

    // Save new product to database
    try {
        await newProduct.save();
        res.redirect(`/products/${newProduct._id}`);
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).send('Error saving product');
    }
});

// Route to display details of a specific product
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
});

// Route to render form for editing a product
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
});

// Route to handle updating a product
app.put('/products/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        // Delete old image if exists
        if (product.image && req.file) {
            const oldImagePath = path.join(__dirname, 'public/images', product.image);

            fs.unlink(oldImagePath, (err) => {
                if (err) {
                    console.error('Error deleting old image:', err);
                }
                console.log('Old image deleted successfully');
            });
        }

        // Update product with new data
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name,
            price,
            category,
            description: req.body.description,
            image: req.file ? req.file.filename : product.image // Use new image if provided, otherwise keep the old one
        }, { runValidators: true, new: true });

        res.redirect(`/products/${updatedProduct._id}`);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send('Error updating product');
    }
});

// Route to delete a product
app.delete('/products/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    // Delete associated image file if exists
    if (deletedProduct.image) {
        const imagePath = path.join(__dirname, 'public/images', deletedProduct.image);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('Error deleting file:', err);
                return res.status(500).send('Error deleting file');
            }
            console.log('Image file deleted successfully');
        });
    }

    res.redirect('/products/');
});

// Start the server
app.listen(3000, () => {
    console.log('APP IS LISTENING ON PORT 3000!')
});
