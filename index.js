var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log("client connected");
    socket.on('disconnect', function() {
        console.log('client disconnected');
    });
});

http.listen('8000', function(){
    console.log('listening on port 8000');
});
