var socket = io();

function Name(){
  socket.emit('retrieve name', name);
}
