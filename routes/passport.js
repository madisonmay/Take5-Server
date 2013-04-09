var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy
  , User = require('../models/user_schema');

passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3000/auth/google/return',
    realm: 'http://localhost:3000'
  },
  function(identifier, profile, done) {
    // User.findOrCreate({ openId: identifier }, function(err, user) {
    //   done(err, user);
    // });
    console.log(identifier, profile);

// DO USER DATABASE STUFF HERE

    done();
  }
));

exports.authenticate = passport.authenticate('google');

exports.authenticate2 = passport.authenticate('google', { successRedirect: '/', failureRedirect: '/' });