    const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
        .then(() => {
            console.log("CONNECTION OPEN!!!")
        })
        .catch(err => {
            console.log("OH NO ERROR!!")
            console.log(err)
        })

    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    });


    const Movie = mongoose.model('Movie', movieSchema); // automatically makes a new collection named movies

    // To insert one 
    
    const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' }); //amadeus here is a document
