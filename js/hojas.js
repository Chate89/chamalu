function Hoja() {
  this.kind = floor(random(0, 11));
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.scale = 1;

  this.xdirection = random(-0.1, 0.1);
  this.ydirection = random(-0.1, 0.1);

  this.display = function() {
    imageMode(CENTER);
    image(hojas[this.kind], this.x, this.y, hojas[this.kind].width/this.scale, hojas[this.kind].height/this.scale);
  }

  this.sides = function() {
    if (this.x > windowWidth+400) {
      this.x = -400;
    } else if (this.x < -400) {
      this.x = windowWidth+400;
    }

    if (this.y > windowHeight+400) {
      this.y = -400;
    } else if (this.y < -400) {
      this.y = windowHeight+400;
    }
  }
}
