function Ball() {
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight+100);
  this.size = random(5, 50);
  this.col = random(150, 200);
  this.redvalon = random(100, 50);
  this.grenvalon = random(100, 50);
  this.bluevalon = random(100, 150);

  this.sat = random(0, 200);
  this.xdirection = random(-0.1, 0.1);
  this.ydirection = random(-0.1, 0.1);
  this.display = function() {
    noStroke();
    fill(150, this.sat);
    ellipse(this.x, this.y, this.size)
  }
  this.sides = function() {
    if (this.x > windowWidth+100) {
      this.x = -100;
    } else if (this.x < -100) {
      this.x = windowWidth+100;
    }

    if (this.y > windowHeight+100) {
      this.y = -100;
    } else if (this.y < -100) {
      this.y = windowHeight+100;
    }
  }
}
