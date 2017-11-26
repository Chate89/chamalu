var balls = [];
var res = 1;
var logo;
var hojas = [];
var leafRotation = 0;

function preload() {
  logo = loadImage("img/Chamalú/LogoChamalú.png");
  hoja = loadImage("img/Hojas/Hoja1.png");
  // for (var i = 0; i < 11; i++) {
  //   hojas[i] = loadImage("img/Hojas/"+ i +".png")
  // }

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 0; i++) {
    balls[i] = new Hoja();
  }
  canvas.position(0, 0);
  canvas.style('z-index', -1);
  pixelDensity(1);
}

function draw() {
  background(100, 50, 10);
  // scale(0.4);
  // image(logo, 0, 0);
  // scale(2.4);

  // balls
  for (var i = 0; i < balls.length; i++) {
    balls[i].y += balls[i].ydirection;
    balls[i].x += balls[i].xdirection;
    balls[i].display();
    balls[i].sides();
  }
    imageMode(CENTER);
    translate(width/2, height);
    scale(windowWidth/displayWidth)
    rotate(sin(leafRotation/200)/50);
    image(hoja, 0, -height/2);
    leafRotation++
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
