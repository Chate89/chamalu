$(document).ready(playabg);

var audiobg = document.getElementById('audiobackground');
var vol = 0;
var maxVol = 0.3;
var needToFadeIn;

function playabg() {
  // start playing
  if (audiobg.currentTime == 0){
    audiobg.volume = maxVol;
    audiobg.loop = true;
    audiobg.play();
    needToFadeIn = true;
  } else {
    // audiobg.pause();
  }
}
