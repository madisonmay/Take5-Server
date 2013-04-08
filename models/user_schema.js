var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
	username: String,
	activities_done: Array
})

var User = mongoose.model('User', user_schema);

module.exports = User;