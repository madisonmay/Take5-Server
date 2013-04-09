var Activity = require('../models/activity_schema')
	, User = require('../models/user_schema')
	, mongoose = require('mongoose');

exports.fetch = function(req,res){
	Activity.find().exec(function(err, data){
		var user=req.session.user;
		var activities=[]
		for (var i = 0; i < user.preferred_categories.length; i++) {
			for (var j = 0; j < data.length; j++){
				for (var k = 0; k < data[j].categories.length; k++){
					if (user.preferred_categories[i]===data[j].categories[k]){
						activities.push(data[j]);
					}
				}
			}
		}
		var activity = activities[Math.floor(Math.random()*activities.length)];
		// render something with activity in it
	});
};

exports.add = function(req,res){
	var activity = new Activity({categories: req.body.categories, description: req.body.description})
	activity.save(function (err) {
		if (err) {
			res.send(err);
			return console.log("Error saving user", err);
		}
		res.send(err);
	});
};
