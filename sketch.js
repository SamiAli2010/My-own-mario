var marioImg,mario
var path,pathImg

function preload(){
//marioImg=loadAnimation("mario1.png","mario2.png","mario3.png")
pathImg=loadImage("mario_bg.png")

}

function setup() {
 createCanvas(1200,300)
 path=createSprite(100,150);
 path.addImage(pathImg);
 path.velocityX = -5;
}

function draw() {
background(0);
  
drawSprites();

if(path.x < 0 ){
    path.x = width/2;
  }
}