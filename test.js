var contador = 1;
var button;
var active;
var hide;
var x = 50;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', 0);
  pixelDensity(1);

  // menu_bar
  button = select('.boton_menu');
  hide = select('.esconder');
  act = select('.active');
  button.mousePressed(menu);
  hide.mousePressed(menuH);
  act.mousePressed(menuH);

  //audiobg
  audiobg = select('#audiobackground');
  audiobg.volume(0);
  playabg();
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
  if (audiobg.time() == 0){
    playabg();
  }
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
function menuH(){
		if(contador == 1){
			$('nav').animate({
				top: '40'
			});
			contador = 1;
		} else {
			contador = 0;
			$('nav').animate({
				top: '-100%'
			});
		}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
