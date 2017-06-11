var app = require('express')();
var server = require('http').Server(app);

//port 3000
server.listen(3000);

app.get('/', function(request,response) {
	response.sendFile(__dirname + '/index.html');
})