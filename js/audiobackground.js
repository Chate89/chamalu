var audiobg;
var vol = 0;
var maxVol = 0.3;
var needToFadeIn;

function playabg() {
  // start playing
  if (audiobg.time() == 0){
    audiobg.volume(0);
    audiobg.play();
    needToFadeIn = true;
  } else {
    // audiobg.pause();
  }
}
