let words = [];
let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  if (!started) {
    background(255);
    fill(0);
    textSize(64);
    text("NOTHING", width / 2, height / 2);
  } else {
    background(0);

    fill(255);
    textSize(64);
    text("NOTHING", width / 2, height / 2 - 40);
    textSize(48);
    text("CHANGES", width / 2, height / 2 + 40);

    for (let w of words) {
      w.update();
      w.display();
    }
  }
}

function mousePressed() {
  if (!started) {
    started = true;

    for (let i = 0; i < 80; i++) {
      words.push(new FloatingWord(width / 2, height / 2));
    }
  } else {
    window.location.href = "jstest2.html";
  }
}

class FloatingWord {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    let angle = random(TWO_PI);
    let speed = random(1, 3);
    this.vx = cos(angle) * speed;
    this.vy = sin(angle) * speed;

    this.baseSpeed = 1.5;
    this.size = random(12, 24);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx *= 0.995;
    this.vy *= 0.995;

    let currentSpeed = sqrt(this.vx * this.vx + this.vy * this.vy);
    if (currentSpeed < this.baseSpeed) {
      let angle = atan2(this.vy, this.vx);
      this.vx = cos(angle) * this.baseSpeed;
      this.vy = sin(angle) * this.baseSpeed;
    }

    if (this.x < 0 || this.x > width) this.vx *= -0.9;
    if (this.y < 0 || this.y > height) this.vy *= -0.9;

    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 100) {
      let angle = atan2(this.y - mouseY, this.x - mouseX);
      let force = map(d, 0, 100, 1.5, 0);
      this.vx += cos(angle) * force;
      this.vy += sin(angle) * force;
    }
  }

  display() {
    fill(255);
    textSize(this.size);
    text("changes", this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}