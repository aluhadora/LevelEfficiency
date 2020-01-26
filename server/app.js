var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var efficient = require('./routes/efficient');
var efficiency2 = require('./routes/efficiency2');
var level = require('./routes/level');
var dashboard = require('./routes/dashboard');
var updateItemCount = require('./routes/updateItemCount');
var droptable = require('./routes/droptable');
var sweeps = require('./routes/sweeps');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){

  res.locals.pool = mysql.createPool({
		host     : 'localhost',
		user     : 'remotero',
		password : 'remotero',
		database : 'mydb'
  });

	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'remotero',
		password : 'remotero',
		database : 'mydb'
  });
  
	res.locals.connection.connect();
	next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/efficient', efficient);
app.use('/efficiency2', efficiency2);
app.use('/level', level);
app.use('/dashboard', dashboard);
app.use('/updateItemCount', updateItemCount);
app.use('/droptable', droptable);
app.use('/sweeps', sweeps);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var http = require('http');
var request = require('request');

console.log("Starting server");

module.exports = app;
var server = http.createServer(app);
server.listen(4007);

var requestLoop = setInterval(function(){
  request({
      url: "http://localhost:4007/dashboard",
      method: "GET",
      timeout: 10000,
      followRedirect: true,
      maxRedirects: 10
  },function(error, response, body){
      if (error) {
        console.log("Error with keep-alive", error, response, body);
      }
  });
}, 600000);

