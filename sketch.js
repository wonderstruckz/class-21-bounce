var mr, fr;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50); 
  mr.shapeColor = "blue";
  fr = createSprite(600,200,50,50);
  fr.shapeColor = "blue";
  mr.debug = true;
  fr.debug = true;
  mr.velocityX = 5;
  fr.velocityX = -5;
}

function draw() {
  background(255,255,255);  
  
  bounceOff(mr,fr);
  drawSprites();
}

