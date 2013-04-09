var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
	username: String,
	password: String,
	activities_done: Array,
	preferred_categories: [String]
})

var User = mongoose.model('User', user_schema);

module.exports = User;