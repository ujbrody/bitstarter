var express = require('express');
var bf = require('buffer');
var fs = rquire('fs');

var app = express.createServer(express.logger());
var buf = fs.readFileSync('indesx.html');

app.get('/', function(request, response) {
  response.send(buf.toString())});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
