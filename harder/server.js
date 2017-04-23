var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var express    = require('express');
var app        = express();
var db = mongoose.connect('mongodb://localhost/myDB');

var Product = require('./model/product');
var WishList = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Creating a new product
app.post('/product', function(req, res){
    // One liner to replace each call as above 
    var product = new Product(req.body);
    //product.title = req.body.title;
    //product.price = req.body.price;   
    
    product.save(function(err, savedProduct){
        if(err){
            res.send(500).send({error:"Could not save product"});
        } else {
            res.send(savedProduct);
        }
    });
        
});

app.listen(3000, function() {
    console.log("Node server running on port 3000");
});
