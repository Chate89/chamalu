var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 100; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background(255);
  // balls
  for (var i = 0; i < balls.length; i++) {
    balls[i].y += balls[i].ydirection;
    balls[i].x += balls[i].xdirection;
    balls[i].display();
    balls[i].sides();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
