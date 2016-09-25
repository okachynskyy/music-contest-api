var app = require('./app');
var server = require('http').createServer(app);

var port = 4000;

server.listen(port, function() {
  console.log("Listening on port", port, "...");
});
