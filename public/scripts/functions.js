var socket = io()

function Name(){
  name = document.getElementById('nameInput').value;
  console.log(name);
  socket.emit('retrieve name', name);
}
/**$(function(){
  $( "button.button" ).bind( "tap", tapHandler );

  function tapHandler( event ){
    $( event.target ).addClass( "tap" );
  }
});**/

function accCapture(){
  window.ondevicemotion=function(event){
    var accelerationX = event.accelerationIncludingGravity.x;
    var accelerationY = event.accelerationIncludingGravity.y;
    var accelerationZ = event.accelerationIncludingGravity.z;
    document.getElementById("test").innerHTML= accelerationY;
  }

  };
