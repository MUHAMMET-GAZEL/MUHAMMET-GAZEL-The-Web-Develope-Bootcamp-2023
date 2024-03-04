const express = require("express");

const app = express();

/*
//
app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!!");
    //res.send("HELLO, WE GOT UR REQUEST, THAT IS A RESPONSE!!");
    res.send({ color: 'red' });
});
*/

app.get('/', (req, res) => {
    res.send('This is the home page.');//every request can just be responded once by res.send!
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    //The expression const { subreddit } = req.params; is an example of object destructuring in JavaScript.
    // It's a way to extract properties from an object and assign them to variables with the same names as the properties.
    res.send(`<h1>Browsing the ${subreddit} subreddit :</h1>`);
})
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID : ${postId} on the ${subreddit} subreddit :</h1>`);
})

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q, color } = req.query;
    if (color) {
        res.send(`<h1>Search results for: ${q} where color is ${color}</h1>`);
    }
    else {
        res.send(`<h1>Search results for: ${q}</h1>`);
    }
})
//NOTE: we have to comment out the first one to make this work.
//example 2: http://localhost:3000/search?q=Cats&color=green 
//output on web page: Search results for: Cats where color is green
//trminal output : { q: 'Cats', color: 'green' }
app.post('/cats', (req, res) => {
    res.send('POST REQUEST TO/cats ,THIS IS DIFFERENT FROM A GET REQUEST!')
})
app.get('/cats', (req, res) => {
    res.send('MEOW!!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!');
})

app.get('/search', (req, res) => {
    console.log(req.query);
    const { q /*if we have multiple query strings we can put them here after , of course*/ } = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`);
})
//example 1: http://localhost:3000/search?q=Cats 
//output on web page: Search results for: Cats
//trminal output : { q: 'Cats' }
app.get('/search', (req, res) => {
    console.log(req.query);
    const { q, color } = req.query;
    res.send(`<h1>Search results for: ${q} where color is ${color}</h1>`);
})
//NOTE: we have to comment out the first one to make this work.
//example 2: http://localhost:3000/search?q=Cats&color=green 
//output on web page: Search results for: Cats where color is green
//trminal output : { q: 'Cats', color: 'green' }


app.get('*', (req, res) => {
    res.send('I DO NOT KNOW THAT PATH!!')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
});
