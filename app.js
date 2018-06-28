require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
var logger = require('morgan');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI); 

//is mongo connected?

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
})

//if connection has a error
connection.on('error', () => {
    console.log('Mongoose default connection error: ' + err)
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var developerRouter = require('./routes/developer');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(`${__dirname}/client/build/`));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/users/:userId/developer', developerRouter);


module.exports = app;
