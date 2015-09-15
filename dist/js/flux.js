
//---boolean to help determine if button has been pressed
var tf = false;

//---sets up layer during playback
var canvas = document.getElementById('playerLayer');
var loading = document.getElementById('loading');
//--this captures today's date (0-31)
var date = new Date();
var day = date.getDate();

//---creating audio element to play for Android Stream
var audio = document.createElement('audio');
audio.src = 'media/flux-web-v2.mp3';

//---to eventually be set as 8, so that conditions only allow stream to happen on August 8th.
var fluxDay = 8;


//---SSE

// function createCORSRequest(method, url){
//     var xhr = new XMLHttpRequest();
//     if ("withCredentials" in xhr){
//         // XHR has 'withCredentials' property only if it supports CORS
//         xhr.open(method, url, true);
//     } else if (typeof XDomainRequest != "undefined"){ // if IE use XDR
//         xhr = new XDomainRequest();
//         xhr.open(method, url);
//     } else {
//         xhr = null;
//     }
//     return xhr;
// }
// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // All HTML5 Rocks properties support CORS.
  var url = 'http://updates.html5rocks.com';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}


if (!!window.EventSource){
var source = new EventSource("http://cohort-server-dev.herokuapp.com/broadcast");
console.log("hello");

} else {
  console.log("nope");
}
 source.addEventListener('Episode-1-Go', function(e){
   if (e.origin != 'http://cohort-server-dev.herokuapp.com/broadcast') {
    alert('Origin was not http://example.com');
    console.log("hello episode 1");
    return;
  }
   console.log(e.data);
 }, false);



// ---stream function. Only happens when user meets the conditions of Clicking Ok, having it be the right date, and the button not having been pressed before (playerLayer mostly takes care of this by not allowing the user to click the button again, and re-trigger the audio, but on a keyboard the user can still potentially trigger by pressing space)
var android = function(){

  var location = confirm("FluxDelux gets going at Nathan Philips Square, on August 8th, 2015! If you're already there, get your head phones plugged in and ready to go, then hit OK");
    if(location === true && day === fluxDay && tf === false){
        audio.play();
        canvas.style.visibility = "visible";
        loading.style.visibility= "visible";

        tf=true

    } else if(location === true && day !== fluxDay){// in case it's not the right date, changing the stream button's text
        document.getElementById("b1").innerHTML = '<img src = "img/android.png" width=\'25px\' height=\'25px\'>' + " " + "Come back on August 8th!";
  };
  // audio.onended=function(){ // once the music is over, returning everything to a ready state, but changing the text to aknowledge the end of Flux
  //   tf=false;
  //   audio.load();
  //   canvas.style.visibility ="hidden";
  //   document.getElementById("info").innerHTML = "Thank you for participating!";
  //
  // }
};

audio.onplaying = function(){
  loading.style.visibility = "hidden";
};

audio.onended=function(){ // once the music is over, returning everything to a ready state, but changing the text to aknowledge the end of Flux
  tf=false;
  audio.load();
  canvas.style.visibility ="hidden";
  document.getElementById("info").innerHTML = "Thank you for participating!";

};
