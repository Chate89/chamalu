var contador = 1;
var button;
var x = 50;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', -1);
  pixelDensity(1);
  button = select('.boton_menu');
  button.mousePressed(menu);
}

function draw() {
  if (needToFadeIn) {
    if (vol < maxVol){
      vol = vol+0.001;
      audiobg.volume(vol);
    } else {
      vol = maxVol;
      audiobg.volume(vol);
      // needToFadeIn = false;
    }
  }
}


function mousePressed(){
  playabg();
  console.log(mouseX + ", " + mouseY)
}



function menu(){
		if(contador == 1){
			$('nav').animate({
				top: '40'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				top: '-100%'
			});
		}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
