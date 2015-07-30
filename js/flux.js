

var tf = false;
var audio = new Audio("media/powwow.mp3");


var android = function(){
  var location = confirm('If at a FluxDelux location press OK');
  if(location === true && tf === false){
    audio.play();
    tf = true;

  } else{
    console.log('Bye');
  }
//---adding controls to the streaming?
  $("body").dblclick(function(){
    audio.pause();
  });


};

var appDirect = function(){
  window.open("https://geo.itunes.apple.com/us/app/fluxdelux/id997524033?mt=8")
}
