function setup() {
	createCanvas(windowWidth, windowHeight);
	background(46, 240, 222);
}

function draw() {
  var tamango = random(11);
  var ruidoX = 0.0002;
  var ruidoY = 0.0001;
  var posX = noise(millis() * ruidoX) * width - 50;
  var posY = noise(millis() * ruidoY) * height - 50;
  noStroke();
  fill(255, random(255));
  for (var x = 100; x < width; x += 4000) {
    ellipse(posX, posY, tamango, tamango);
  }
  
  var ruidoX1 = 0.00013;
  var ruidoY1 = 0.0002;
  var posX1 = noise(millis() * ruidoX1) * width;
  var posY1 = noise(millis() * ruidoY1) * height;
  noStroke();
  fill(205, 0, 170, random(87));
  for (var x = 1; x < width; x += 400000) {
    ellipse(posX1, posY1, tamango, tamango);
  }
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

