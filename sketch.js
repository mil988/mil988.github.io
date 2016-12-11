function setup() {
	createCanvas(windowWidth, windowHeight);
	background(46, 240, 222);
}

function draw() {
  var tamango = random(11);

  var ruidoX2 = 0.00023;
  var ruidoY2 = 0.00002;
  var posX2 = noise(millis() * ruidoX2) * width;
  var posY2 = noise(millis() * ruidoY2) * height;
  noStroke();
  fill(255, 170, 0, random(77));
  for (var x = 100; x < width; x += 4000) {
    ellipse(posX2, posY2, tamango + 4, tamango + 4);
  }

  var ruidoX3 = 0.0013;
  var ruidoY3 = 0.00002;
  var posX3 = noise(millis() * ruidoX3) * width;
  var posY3 = noise(millis() * ruidoY3) * height;
  noStroke();
  fill(170, 170, 170, random(127));
  for (var x = 100; x < width; x += 4000) {
    ellipse(posX3, posY3, tamango, tamango);
  }

  var ruidoX = 0.0002;
  var ruidoY = 0.0001;
  var posX = noise(millis() * ruidoX) * width - 50;
  var posY = noise(millis() * ruidoY) * height - 50;
  noStroke();
  fill(255, random(155));
  for (var x = 100; x < width; x += 4000) {
    ellipse(posX, posY, tamango, tamango);
  }
  
  var ruidoX1 = 0.00013;
  var ruidoY1 = 0.0002;
  var posX1 = noise(millis() * ruidoX1) * width;
  var posY1 = noise(millis() * ruidoY1) * height;
  noStroke();
  fill(205, 0, 170, random(67));
  for (var x = 1; x < width; x += 400000) {
    ellipse(posX1, posY1, tamango, tamango);
  }
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

