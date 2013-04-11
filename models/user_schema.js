var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
	email: String,
	activities_done: Array,
	preferred_categories: [String],
    accessToken: String
})

var User = mongoose.model('User', user_schema);

module.exports = User;
