var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//port 3000
server.listen(3000);

app.get('/', function(request,response) {
	response.sendFile(__dirname + '/index.html');
});

//when a connection between the client and server is made. 
//when we have a connection, we will trigger this:
io.on('connection', function(socket) {
	console.log('A connection was made.');
});