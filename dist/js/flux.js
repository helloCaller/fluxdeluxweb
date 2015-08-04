

var tf = false;


var canvas = document.getElementById('playerLayer');

var date = new Date();
var day = date.getDate();

var audio = document.createElement('audio');
audio.src = 'media/powwow.mp3';

var currentDay = 3;



var android = function(){
  var location = confirm("Flux Delux gets going at Nathan Philips Square, on August 8th, 2015! If you're already there, get your head phones plugged in and ready to go, then hit OK");
    if(location === true && day === currentDay && tf === false){
        audio.play();
        canvas.style.visibility = "visible";
        tf===true

    } else if(location === true && day !== currentDay){
        document.getElementById("b1").innerHTML = '<img src = "img/android.png" width=\'25px\' height=\'25px\'>' + " " + "Come back on August 8th!";
  };
  audio.onended=function(){
    tf=false;
    canvas.style.visibility ="hidden";
    document.getElementById("b1").innerHTML = "Thank you for participating!";

  }
};
