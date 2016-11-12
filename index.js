var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/* This is not how you make a web server. Whatever man. */
app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/style.css', function(req, res){
  res.sendfile('style.css');
});

app.get('/favicon.ico', function(req, res){
  res.sendfile('favicon.ico');
});

app.get('/script.js', function(req, res){
  res.sendfile('script.js');
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
