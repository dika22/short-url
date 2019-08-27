var express = require('express');
var app = express();
var db = require('./koneksi');

var UserController = require('./controller/UserController');
app.use('/users', UserController);

module.exports = app;