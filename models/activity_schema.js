var mongoose = require('mongoose');

var activity_schema = mongoose.Schema({
	description: String,
	categories: [String]
})

var Activity = mongoose.model('Activity', activity_schema);

module.exports = Activity;