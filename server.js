var Show, User, app, bcrypt, bodyParser, cookieParser, express, logger, mongoose, path, port;

express = require('express');

path = require('path');

logger = require('morgan');

mongoose = require('mongoose');

bcrypt = require('bcryptjs');

bodyParser = require('body-parser');

cookieParser = require('cookie-parser');

Show = require('./models/show');

User = require('./models/user');

mongoose.connect('localhost');

app = express();

port = process.env.PORT || 3003;

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

app.use(cookieParser);

app.use(express["static"](path.join(__dirname, 'public')));

app.listen(port, function() {
  return console.log('Ok Express started at port ' + port);
});
