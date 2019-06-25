class Character {
  constructor() {
    this.r = 10;
  }

  show() {
    fill(255);
    this.pos = createVector(WIDTH / 2, HEIGHT / 2);
    translate(this.pos.x, this.pos.y);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }

  update() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    fill(0, 0, 0);

    if (this.y > HEIGHT) {
      this.velocity = 0;
      this.y = 0;
    }
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    } else if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
    }
  }
}

class OrbitingObstacles {
  constructor() {
    this.top = random(HEIGHT / 2);
    this.bottom = random(HEIGHT / 2);
    this.x = 25 + random(WIDTH - 50);
    this.y = 0;
    this.xSize = 25;
    this.ySize = 25;
    this.speed = 5;
  }

  show() {
    ellipse(this.x, this.y, this.xSize, this.ySize);
  }

  update() {
    this.y += this.speed;
    this.xSize += 1;
    this.ySize += 1;
    fill(255);
  }

  offscreen() {
    if (this.y > HEIGHT) {
      return true;
    } else {
      return false;
    }
  }
}
