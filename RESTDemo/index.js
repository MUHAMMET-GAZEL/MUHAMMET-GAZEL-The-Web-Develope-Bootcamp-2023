const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Pls, delete your account Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof!'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })//after adding {comments} we now have access to comments in our ejs file
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.send('it worked');
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;//we can not use req.body before parsing data
    res.send(`Here are your ${qty} ${meat} tacos!`)

})

app.listen(3000, () => {
    console.log('ON PORT 3000')
})