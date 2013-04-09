
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , database = require('./routes/database');

var app = express();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/take5');


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
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// GET requests.
app.get('/', routes.index);
app.get('/login', user.login); // Logging in, creating a user.
app.get('/add', user.addactivity);//


// POST requests.
app.post('/login', user.loginauth); // Login.
app.post('/fetch', database.fetch); // Get a break task
app.post('/add', database.add);//Add activities to database

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
