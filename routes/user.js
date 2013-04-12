var Activity = require('../models/activity_schema')
	, User = require('../models/user_schema')
	, mongoose = require('mongoose')
	, passport = require('passport')
  	, GoogleStrategy = require('passport-google').Strategy;

exports.login = function(req, res) {
    req.session.url = '/';
	res.render('login', {title: "Sign In"});
};


// function session_login(req, res) {
//     req.session.user = user;
//     return res.redirect('/');
// }

exports.memory = function(req, res) {
    req.user.last_activity = req.body.activity_id
    req.user.save(function(err){
        if (err){
            res.send(err);
            console.log('error', err);
        }
    });
}

exports.recommend = function(req, res){
    Activity.findOne({'_id': req.user.last_activity}, function(err, activity) {
        activity.score++
        activity.save();
    })
}

exports.blacklist = function(req, res) {
    req.user.blacklist.push(req.user.last_activity);
    req.user.save(function(err){
        if (err){
            res.send(err);
            console.log('error', err);
        }
    });
    Activity.findOne({'_id': req.user.last_activity}, function(err, activity) {
        activity.score--
        activity.save();
    })
}

exports.addactivity = function(req, res) {
	res.render('add', {title: 'Add an Activity'});
};

exports.break = function(req, res) {
    res.render('break', {title: 'Take a break!'})
}

exports.settings = function(req, res) {
    res.render('user', {title: 'Settings', prefs: JSON.stringify(req.user.preferred_categories)})
}

exports.prefs = function(req, res) {
	req.user.preferred_categories=req.body.categories;
	req.user.save(function(err){
		if (err){
			res.send(err);
			return console.log('error', err);
		}
		res.send(err);
	});
}

// exports.loginauth = function(req, res) {
// 	User.findOne({username: req.body.username}).exec(function (err, user) { // Starts having trouble here.
// 		if (err) {
// 			console.log("Error finding user", err);
// 		} else if (!user) {
// 			console.log("create new user");
// 			var user = new User({username: req.body.username});
// 			user.save(function (err) {
// 				if (err) {
// 					console.log("Error saving user", err);
// 				} else {
// 					login(req, res, user);
// 				}
// 			});
// 		} else {
// 			console.log("already a user");
// 			login(req, res, user);
// 		}
// 	});
// };
// function login(req, res, user) {
//     req.session.user = user;
//     return res.redirect('/');
// }
