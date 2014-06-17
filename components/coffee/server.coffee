express = require 'express'
path = require 'path'
logger = require 'morgan'
mongoose = require 'mongoose'
bcrypt = require 'bcryptjs' #cryto method
bodyParser = require 'body-parser'
cookieParser = require 'cookie-parser'

Show = require './model/show'
User = require './model/user'

mongoose.connect 'localhost'
app = express()

app.set 'port', process.env.PORT || 3002
app.use logger('dev')
app.use bodyParser.json()
app.use bodyParser.urlencoded()
app.use cookieParser
app.use express.static path.join __dirname, 'public'

app.listen app.get 'port', ->
    console.log 'Express at port ' + app.get 'port'
    return
