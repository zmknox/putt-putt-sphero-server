var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var pg = require('pg');

app.set('port', (process.env.PORT || 8000));

/* This is not how you make a web server. Whatever man. */
app.get('/', function(req, res){
  res.sendfile('form.html');
});
app.get('/index.html', function(req, res){
  res.sendfile('index.html');
});

//This doesn't work and I don't why pls help
app.get('/db', function (req, res) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM users', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
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
    socket.on('retrieve name', function(name){
      console.log('Name: ' + name);
    });
});

app.get('/test', function(req, res) {
  io.emit("test", {user: "nodesource", text: "Hello, world!"})
  res.sendfile('index.html');
})

app.listen(app.get('port'), function(){
    console.log('listening on port', app.get('port'));
});
