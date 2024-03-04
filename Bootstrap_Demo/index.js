const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');


//app.use(express.static('public'))//includes public folder to serve static assets directly, making it easy to include things like stylesheets, client-side scripts, and images
app.use(express.static(path.join(__dirname, 'public')))//everything inside the public directory will be accessible even from the outside 

app.set('view engine', 'ejs');//.set accepts two properties ('view engine','ejs') 
//ejs assumes all of our ejs files exist in diroctory named views , so we gotta create it and put all of our html files inside but with the extension .ejs 
app.set('views', path.join(__dirname, '/views'))//enable us to run index.js from the outside of the main folder
app.get('/', (req, res) => {

    res.render('home.ejs');//re.render is used to send back a file (a template) while res.send is used just to send back a string
})
app.get('/random', (req, res) => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { rand1: num1, rand2: num2 }) /*
     we can also just use {num1,num2} instead of 
    {rand1: num1,rand2: num2} and use use num1 and num2 
    */
    // so we can pass second argument to res.render and it must be an object    
    //here the thing that we can use in our ejs file is rand1 and rand2
})
app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephaine', 'Winston'
    ]
    res.render('cats', { cats });// { cats } = {cats:cats}
})
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;// = const subreddit = req.params.subreddit;
    const data = redditData[subreddit];// here we cannot use redditData.subreddit instead of redditData[subreddit] because subrddit is a dynamic property , means it is changing every time 
    if (data) {
        res.render('subreddit', { ...data });
    }
    /*
        res.render('subreddit', data); - Passes the entire data object as is.
        
        res.render('subreddit', { ...data }); - Spreads all properties of the data object 
        and passes them as separate named variables to the template.
    */else {
        res.render('notfound', { subreddit })
    }
})
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})