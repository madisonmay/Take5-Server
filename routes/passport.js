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
    var email = profile.emails[1]
    User.findOne({email:email}).exec(function(err,user){
      if (err)
        return done(err)
      if (!user){
        user = new User({email:email})
        user.save(function(err){
          if (err) {
            return done(err);
          }
          return done(null, user);
        });
      }
      else 
        return done(null, user);
    });
  }));

// // DO USER DATABASE STUFF HERE

//     done();
//   }
// ));

exports.authenticate = passport.authenticate('google');

exports.authenticate2 = passport.authenticate('google', { successRedirect: '/', failureRedirect: '/' });