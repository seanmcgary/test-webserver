var express = require('express');

var app = express();

app.get('/', function(req, res){
	console.log(req.headers);
	res.send("hello world");
});

app.listen(8080);
