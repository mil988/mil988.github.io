function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);
  noFill();
  for (var i = 3; i < 2000; i += random(1000)) {
    ellipse(width / 2, height / 2, i, i);
  }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

