
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , MongoStore = require('connect-mongo')(express)
  , database = require('./routes/database')
  , passport = require('./routes/passport')
  , GoogleStrategy = require('passport-google').Strategy
  , User = require('./models/user_schema');

var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/take5');


// Setup for passport stuff
var passport = require('passport')

passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user.email);
});

passport.deserializeUser(function(email, done) {
  User.findOne(email, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3000/auth/google/return',
    realm: 'http://localhost:3000'
  },
  function(identifier, profile, done) {
    // User.findOrCreate({ openId: identifier }, function(err, user) {
    //   done(err, user);
    // });
    console.log('in the function');
    var email = profile.emails[0].value;
    console.log(email);
    User.findOne({email:email}).exec(function(err,user){
      console.log(err);
      console.log('in the find');
      console.log(user);
      if (err){ 
        console.log(err);
        return done(err);
      }
      if (user==null){
        console.log('making user');
        user = new User({email:email});
        console.log('made user');
        user.save(function(err){
          if (err) {
            console.log(err);
            return done(err);
          }
          console.log('saved user');
          return done(null, user);
        });
      }
      else 
        console.log('found user');
        return done(null, user);
    });
  }));

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('secret', process.env.SESSION_SECRET || 'terrible, terrible secret')
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(app.get('secret')));
  app.use(express.session({
    maxAge: new Date(Date.now() + 3600000),
    store: new MongoStore(
      {db:mongoose.connection.db},
      function(err){
          console.log(err || 'connect-mongodb setup ok');
        })
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// GET requests.
app.get('/', routes.index);
app.get('/login', user.login); // Logging in, creating a user.

app.get('/fetch', database.fetch); // Get a break task
app.get('/add', user.addactivity);// Add an activity


app.get('/auth/google', passport.authenticate('google'));
app.get('/auth/google/return', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/' }));


// POST requests.
app.post('/add', database.add);//Add activities to database
app.get('/break', user.break)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

function loginRequired(){ 
  return function(req, res, next){
    
  };
}
