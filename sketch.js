function setup() {
	createCanvas(windowWidth, windowHeight);
	background(46, 240, 222);
}

function draw() {
  var tamango = random(11);
  var ruidoX = 0.0002;
  var ruidoY = 0.0001;
  var posX = noise(millis() * ruidoX) * width - 20;
  var posY = noise(millis() * ruidoY) * height - 20;
  noStroke();
  fill(255, random(255));
  for (var x = 100; x < width; x += 4000) {
    ellipse(posX, posY, tamango, tamango);
  }
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

