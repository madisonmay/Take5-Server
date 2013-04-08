var mongoose = require('mongoose');

var activity_schema = mongoose.Schema({
	date_created: Date,
	activity_text: String
})

var Activity = mongoose.model('Activity', activity_schema);

module.exports = Activity;