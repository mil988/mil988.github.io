function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
<<<<<<< HEAD
  background(0, 120, 0);
  fill(180, 0, 100, random(255));
=======
  background(255, 120, 0);
  fill(180, 0, 100, random(25));
>>>>>>> origin/master
  for (var i = 3; i < 2000; i += random(1000)) {
    ellipse(width / 2, height / 2, i, i);
  }
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

