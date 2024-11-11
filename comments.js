// Create web server
// 1. Load express
// 2. Create express object
// 3. Create a route for GET method
// 4. Create a route for POST method
// 5. Create a route for DELETE method
// 6. Start the server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var comments = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

app.get('/comments', function (req, res) {
    res.json(comments);
});

app.post('/comments', function (req, res) {
    var newComment = {
        id: Date.now(),
        text: "res"
    };
    comments.push(newComment);
    res.json(comments);
});