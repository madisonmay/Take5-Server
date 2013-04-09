var Activity = require('../models/activity_schema')
	, User = require('../models/user_schema')
	, mongoose = require('mongoose');

exports.fetch = function(req,res){
	Activity.find().exec(function(err, data){

	});
};