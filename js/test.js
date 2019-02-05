var contador = 1;
var button;
var x = 50;
var abg;

function preload(){
  abg = loadSound('audio/abg.ogg');
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', 999);
  pixelDensity(1);

  // abg.loop();
  abg.loop();

  button = select('.boton_menu');
  button.mousePressed(menu);
}

function draw() {
}


function mousePressed(){

  // console.log(mouseX + ", " + mouseY)
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
