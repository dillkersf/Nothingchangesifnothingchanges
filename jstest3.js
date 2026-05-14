let revealComplete = false;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  textSize(80);
  textFont('Arial');
}

function draw() {

  if (revealComplete) {
    background(255, 0, 0);

    fill(255);
    text("changes", width / 2, height / 2);

    document.getElementById("backLink").style.display = "block";

    return;
  }

  background(0);

  let word = "nothing";
  let x = width / 2;
  let y = height / 2;

  let w = textWidth(word);
  let leftEdge = x - w / 2;
  let rightEdge = x + w / 2;

  fill(255);
  text(word, x, y);

  fill(0);
  noStroke();

  let revealX = constrain(mouseX, leftEdge, rightEdge);
  rect(revealX, 0, width - revealX, height);

  if (mouseX > rightEdge) {
    revealComplete = true;
  }
}