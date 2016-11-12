var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* This is not how you make a web server. Whatever man. */
<<<<<<< HEAD
=======

>>>>>>> e721a367a790a76ef979cf16fb2d444fb3a4c759
app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.use(express.static('public'));

app.get('/css/bootstrap.min.css', function(req, res){
  res.sendfile('node_modules/bootstrap3/dist/css/bootstrap.min.css');
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
