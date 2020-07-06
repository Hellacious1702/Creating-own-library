var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect3 = createSprite(200, 400, 50, 50);
  rect3.shapeColor = "green";
  
  rect4 = createSprite(200, 300, 50, 50);
  rect4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  
  rect3.x = mouseX ;
  rect3.y = mouseY ;

  if(rect3.isTouching(rect4)){
    rect3.shapeColor = "red";
    rect4.shapeColor = "red";
  }
  else{
    rect3.shapeColor = "green";
    rect4.shapeColor = "green";
  }

  bounceOff(fixedRect , movingRect);
  drawSprites();
}