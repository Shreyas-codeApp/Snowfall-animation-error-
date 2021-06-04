const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





var boy,boy_img,boy2_img;
var ground;
var snow;
var randX;
var snow;


function preload(){
  bg = loadImage("snow2.jpg");
  boy_img = loadAnimation("boy.png");
  boy2_img = loadAnimation("boy2.png");
}


function setup() {
  createCanvas(800,400);
  boy = createSprite(100,270);
  engine = Engine.create();
  world = engine.world;
  boy.addAnimation("snow",boy_img);
  boy.addAnimation("snow2",boy2_img);
  ground = createSprite(400,400,800,20);
 
  
  boy.scale = 0.1;
 
 
}

function draw() {
  background(bg);  
  
 

   
 
  drawSprites();
  boy.velocityY = boy.velocityY +0.8;
  boy.collide(ground);
  ground.visiblity = false;
  

if(keyCode === 37){
  boy.changeAnimation("snow2",boy2_img);
  boy.x = boy.x-5;
}
else if(keyCode === 39){
  boy.changeAnimation("snow",boy_img);
  boy.x = boy.x+5;
}
else{
  boy.x = boy.x+0;
}


if(keyWentDown("space")){
  boy.velocityY = -50;
  
}
else if(keyWentUp("space")){
  boy.velocityY = 0;
}






}

snow = new Snow(400,100,10);
snow.display();

