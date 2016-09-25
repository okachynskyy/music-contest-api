var express = require('express');
var app = express();

var api = require('./api');
app.use('/api', api);

app.get('*', function(req, res){
  res.sendStatus(404);
});

module.exports = app;
