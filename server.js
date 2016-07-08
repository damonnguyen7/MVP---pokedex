var express = require('express');
var app = express();
var wiki = require('wikipedia-js');
var port = process.env.PORT || 3000;


//express middleware: serve up static files for client/dependencies
app.use(express.static(__dirname + '/client'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {

});

console.log('http://localhost:3000/ test')
app.listen(port);