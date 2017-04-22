var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// Define data
var product = new Schema({
    title: String,
    price: Number,
    likes: Number
});

// Export to db
module.exports = mongoose.model('Product', product);