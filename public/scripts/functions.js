var socket = io();

function Name(){
  name = document.getElementById('nameInput').value;
  console.log(name);
  socket.emit('retrieve name', name);
};

/**$(function(){
  $( "button.button" ).bind( "tap", tapHandler );

  function tapHandler( event ){
    $( event.target ).addClass( "tap" );
  }
});**/

function accCapture(){
  var banananas = 0;
  window.ondevicemotion=function(event){
    var accelerationX = event.accelerationIncludingGravity.x;
    var accelerationY = event.accelerationIncludingGravity.y;
    var accelerationZ = event.accelerationIncludingGravity.z;
    banananas = accelerationY;

  }
  document.getElementById("test").innerHTML= banananas;

  };
