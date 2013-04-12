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
	//Populate list with activities
	Activity.find().exec(function(err, data){
		var user=req.user;
		var activities=[];
		var selection=[];

		//begin for loops of death
		for (var i = 0; i < user.preferred_categories.length; i++) {
			for (var j = 0; j < data.length; j++){
				console.log(data[j]._id)
				for (var k = 0; k < data[j].categories.length; k++){
					if (user.preferred_categories[i]===data[j].categories[k]){
						if (!(inArray(user.blacklist, data[j]._id))) {
							console.log("Activity matches.")

							//Temporary solution to weight activites based on score
							for (var m = 0; m < (data[j].length + 1); m++) {
								activities.push(data[j]);
							}
						} else {
							console.log("Blacklisted", data[j]._id);
						}
					} else if (!(inArray(user.blacklist, data[j]._id))) {
						console.log('Pushed to selection')
						//Temporary solution to weight activities based on score
						for (var m = 0; m < (data[j].score + 1); m++) {
							selection.push(data[j]);
						}
					} else {
						console.log('Blacklisted and not in category', data[j]._id)
					}
				}
			}
		}

		if (activities.length == 0) {
			console.log('No matching activities')
			console.log('Selection: ', selection)
			if (selection.length > 0) {
				console.log("Using selection")
				//unblacklisted activities
				activities = selection;
			} else {
				console.log("Using full database")
				//worst case scenario
				activities = data;
			}
		}
		console.log(activities);

		//Send random activity
		res.render('break',{title:'Break', activity: activities[Math.floor(Math.random()*activities.length)]});
	});
};

exports.add = function(req,res){
	var activity = new Activity({categories: req.body.categories, description: req.body.description, image_url: req.body.image_url, score: 5})
	activity.save(function (err) {
		if (err) {
			res.send(err);
			return console.log("Error saving activity", err);
		}
		res.send(err);
	});
};
