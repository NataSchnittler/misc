function setup() {
  createCanvas(400, 400);
}

function draw() {
  //sky
  darkBackground();

  //hill
  fill(17, 89, 14);
  ellipse(207, 399, 733, 293);
 
  noStroke();

  //stars
  lightFill();
  var starRadius = 6;
  drawStar(100, 111, starRadius);
  drawStar(131, 148, starRadius);
  drawStar(257, 89, starRadius);
  drawStar(39, 97, starRadius);
  drawStar(372, 145, starRadius);
  drawStar(159, 162, starRadius);
  drawStar(279, 141, starRadius);
  drawStar(128, 168, starRadius);
  drawStar(81, 33, starRadius);

  //moon
  drawMoon();
}

function darkBackground(){
  background(4, 7, 26);
};

function lightFill(){
  fill(232, 227, 227);
};

function darkFill(){
  fill(4, 7, 26);
};

function drawStar(starPosX, starPosY, starRadius){
  ellipse(starPosX, starPosY, starRadius);
};

function drawMoon(){
  var posX = 345;
  var posY = 100;
  var moonRadius = 30;
  lightFill();
  ellipse(posX, posY, moonRadius, moonRadius);
 
  while(posX < 400){
    darkFill();
    ellipse(posX, posY, moonRadius, moonRadius);
    posX += 4;
    posY -= 2;
    lightFill();
    ellipse(posX, posY, moonRadius, moonRadius);
  }
};
