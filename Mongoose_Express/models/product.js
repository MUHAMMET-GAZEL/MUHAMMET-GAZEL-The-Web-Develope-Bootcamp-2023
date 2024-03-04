const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    },
    description: {
        type: String,
        lowercase: true
    },
    image: {
        type: String
    }
})


const Product = new mongoose.model('Product', productSchema);


module.exports = Product;