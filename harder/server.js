var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var express    = require('express');
var app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000, function() {
    console.log("Node server running on port 3000");
});