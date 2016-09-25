var express = require('express');
var api = express();

var data = require('./data');
api.use('/data', data);

module.exports = api;
