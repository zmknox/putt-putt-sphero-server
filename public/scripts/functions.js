var socket = io()

function Name(){
  name = document.getElementById('nameInput').value;
  console.log(name);
  socket.emit('retrieve name', name);
}
