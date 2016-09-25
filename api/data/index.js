var express = require('express');
var data = express();
var dataRoutes = require('./routes');

data.use('/', dataRoutes);

module.exports = data
