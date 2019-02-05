var contador = 1;
var button;
var x = 50;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', 999);
  pixelDensity(1);
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
