
//this boolean may no longer be neccessary with the block out screen coming up
var tf = false;


var canvas = document.getElementById('playerLayer');
var date = new Date();
var day = date.getDate();
var audio = document.createElement('audio');
audio.src = 'media/powwow.mp3';





var android = function(){
  var location = confirm("Flux Delux gets going at Nathan Philips Square, on August 8th, 2015! If you're already there, get your head phones plugged in and ready to go, then hit OK");
    if(location === true && day === 2 && tf === false){
        audio.play();
        canvas.style.visibility = "visible";
        tf===true

    } else if(location === true && day !== 2){
        document.getElementById("b1").innerHTML = '<img src = "img/android.png" width=\'25px\' height=\'25px\'>' + " " + "Come back on August 8th!";
  };
  audio.onended=function(){
    tf=false;
    canvas.style.visibility ="hidden";
    document.getElementById("b1").innerHTML = "Thank you for participating!";

  }
};



// var android = function(){
//   if(press === true && tf === false){
//     audio.play();
//     tf === true;
//   } else{
//     buttonChange();
//   };
//
//   audio.onended=function(){
//     tf=false;
//
//     document.getElementById("b1").textContent = "Thank you for participating!";
//     console.log("done");
//   }
// };



// ---adding controls to the streaming?
//   $("body").dblclick(function(){
//     audio.pause();
//   });
//
//
// };

// var appDirect = function(){
//   window.open("https://itunes.apple.com/ca/app/fluxdelux/id997524033?mt=8&ign-mpt=uo%3D4");
// };
