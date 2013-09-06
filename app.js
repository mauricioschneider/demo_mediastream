
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var express = require('express');
var video = require('./routes/video');
var user = require('./routes/user');
var category = require('./routes/category');
var http = require('http');
var path = require('path');
var passport = require('passport');
var fs = require('fs');

mongoose.connect('mongodb://localhost/videomanager');

var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function callback() {
    console.log("videomanager connected with mongoose");
});

// Bootstrap models
var models_path = __dirname + '/models'
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})

var app = express();

// passport session and flash
app.use(passport.initialize())
app.use(passport.session())
//app.use(flash())

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', video.index);
app.get('/video/view/:id', video.view);
app.get('/video/create', video.create);
app.post('/video/post', video.post);
app.get('/categories', category.list);
app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',}),
  user.session);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
