var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

// Define data
var product = new Schema({
    title: String,
    price: Number,
    likes: {type: Number, default: 0}
});

// Export to db model when creating a new product
module.exports = mongoose.model('Product', product);