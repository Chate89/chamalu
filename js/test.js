var contador = 1;
var button;
var x = 50;
var audiobg;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', -1);
  pixelDensity(1);
  button = select('.boton_menu');
  button.mousePressed(menu);
  audiobg = select('#audiobackground');
  if (!audiobg.isPlaying){
    audiobg.play();
  }
}

function draw() {
}


function mousePressed(){
  audiobg = select('#audiobackground');
  if (!audiobg.isPlaying){
    audiobg.play();
  }

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
