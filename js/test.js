var balls = [];
var res = 1;
var logo;
var hojas = [];
var leafRotation = 0;

function preload() {
  logo = loadImage("img/Chamalú/LogoChamalú.png");
  //hoja = loadImage("img/Hojas/" + floor(random(1, 11)) + ".png");
  for (var i = 0; i < 11; i++) {
    hojas[i] = loadImage("img/Hojas/"+ i +".png")
  }

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 10; i++) {
    balls[i] = new Hoja();
  }
  canvas.position(0, 0);
  canvas.style('z-index', -1);
  pixelDensity(1);
}

function draw() {
  background(90, 100, 20);


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
