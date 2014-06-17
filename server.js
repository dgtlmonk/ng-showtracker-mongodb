var express = require('express');
var path = require('path');
// var favicon = require('static-favicon');
 var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var Show = require('./models/show');
var User = require('./models/user');

mongoose.connect('localhost');

var app = express();

app.set('port', process.env.PORT || 3001);
//app.use(favicon());
app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function (){
 console.log('Express server on port: ' + app.get('port'));
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function( err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
