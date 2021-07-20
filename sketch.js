var ball 
  
function setup() {
  createCanvas(1200,600);
ball=createSprite(300,450,100,100);
}

function draw() 
{

  background(30);
  drawSprites();
  if(keyDown(LEFT_ARROW)){
   ball.velocityX=-5;
   
  }
  if(keyDown(RIGHT_ARROW)){
    ball.velocityX=5;
    
   }
}




