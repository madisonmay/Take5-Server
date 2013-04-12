var mongoose = require('mongoose');

var activity_schema = mongoose.Schema({
	description: String,
	categories: [String],
    image_url: String,
    score: Number
})

var Activity = mongoose.model('Activity', activity_schema);

module.exports = Activity;
