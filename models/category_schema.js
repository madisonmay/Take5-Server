var mongoose = require('mongoose');

var category_schema = mongoose.Schema({
    photo_url: String,
    title: String
})

var Category = mongoose.model('Category', category_schema);

module.exports = Category;
