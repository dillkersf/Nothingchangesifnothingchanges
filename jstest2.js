let drawing = true;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textFont('Arial');
  textSize(48);
  textAlign(CENTER, CENTER);
}

function draw() {
  if (drawing) {
    if (mouseIsPressed || movedX !== 0 || movedY !== 0) {
      points.push({ x: mouseX, y: mouseY });
    }

    for (let p of points) {
      fill(0);
      stroke(255);
      strokeWeight(1);
      text("IF", p.x, p.y);
    }
  } else {
    background(0);
    fill(255);
    noStroke();
    textSize(48);
    text("nothing", width / 2, height / 2);
  }
}

function mousePressed() {
  window.location.href = "jstest3.html";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}