var logo;

function preload() {
  logo = loadImage("img/Chamalú/LogoChamalú.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
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
