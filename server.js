var express = require('express');

var app = express();

app.get('/', function(req, res){
	console.log(req.headers);
	res.send('IM RUNNING IN A CONTAINER');
});

app.listen(8080);
