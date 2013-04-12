var Activity = require('../models/activity_schema')
	, User = require('../models/user_schema')
	, Category = require('../models/category_schema')
	, mongoose = require('mongoose');


function inArray(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return true;
    }
    return false;
}

exports.fetch = function(req,res){
	Activity.find().exec(function(err, data){
		var user=req.user;
		var activities=[];
		console.log(data);
		for (var i = 0; i < user.preferred_categories.length; i++) {
			for (var j = 0; j < data.length; j++){
				for (var k = 0; k < data[j].categories.length; k++){
					if (user.preferred_categories[i]===data[j].categories[k]){
						if (!(inArray(user.blacklist, data[j]._id))) {
							console.log("Activity matches.")
							activities.push(data[j]);
						} else {
							console.log("Blacklisted", data[j]._id);
						}
					}
				}
			}
		}

		if (activities.length == 0) {
			console.log('hi')
			activities = data;
		}
		console.log(activities);
		res.render('break',{title:'Break', activity: activities[Math.floor(Math.random()*activities.length)]});
	});
};

exports.add = function(req,res){
	var activity = new Activity({categories: req.body.categories, description: req.body.description, image_url: req.body.image_url})
	activity.save(function (err) {
		if (err) {
			res.send(err);
			return console.log("Error saving activity", err);
		}
		res.send(err);
	});
};
