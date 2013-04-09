var Activity = require('../models/activity_schema')
	, User = require('../models/user_schema')
	, mongoose = require('mongoose')
	, passport = require('passport')
  	, GoogleStrategy = require('passport-google').Strategy;

exports.login = function(req, res) {
	res.render('login', {title: "Sign In"});
};



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