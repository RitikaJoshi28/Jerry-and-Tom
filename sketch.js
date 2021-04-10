var tom,tom_tom;
var jerry,jerry_jerry;
function preload() {
    //load the images here
  tom_tom=loadImage("cat1.png","cat2.png","cat3.png","cat4.png",);
  jerry_jerry=loadImage("mouse1.png","mouse2.png","moouse3.png","mouse4.png");

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
tom=createSprite(650,600,30,30);
tom.addImage=("tom",tom_tom);
jerry=createSprite();
jerry.addImage("jerry",jerry_jerry);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    


    drawSprites();
}


function keyPressed()
{

  //For moving and changing animation write code here
  if(keyDown(DOWN_ARROW))
  {
    tom.velocityY=-3;
  }
  if(keyDown(UP_ARROW))
  {
    tom.velocityY=3;
  }
  if(keyDown(RIGHT_ARROW))
  {
    tom.velocityX=4;
  }
  if(keyDown(LEFT_ARROW))
  {
    tom.velocityX=-3;
  }
  if(keyDown(DOWN_ARROW))
  {
    jerry.velocityY=-3;
  }
  if(keyDown(UP_ARROW))
  {
    jerry.velocityY=3;
  }
  if(keyDown(RIGHT_ARROW))
  {
    jerry.velocityX=4;
  }
  if(keyDown(LEFT_ARROW))
  {
    jerry.velocityX=-3;
  }


}
