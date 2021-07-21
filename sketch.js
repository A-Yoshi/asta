var bg, bgg;
var sleep;
var gym;
var eat;
let drink;
let move;
let ast;
let brush;
let bath;
function preload(){
  bg = loadAnimation("iss.png");
  sleep = loadAnimation("sleep.png");
  gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  move = loadAnimation("move.png", "move1.png");
  brush = loadAnimation("brush.png");
  bath = loadAnimation("bath1.png", "bath2.png");
}


function setup() {
  createCanvas(800,400);
  bgg=createSprite(400, 200, 50, 50);
  bgg.addAnimation("bggg", bg);
  bgg.scale=0.165;
  ast = createSprite (350, 250);
  ast.addAnimation("slp", sleep);
  ast.scale=0.1;
}

function draw() {
  background(255,255,255);  
  edges= createEdgeSprites();
  ast.bounceOff(edges);
  if(keyDown("UP_ARROW")){
    ast.addAnimation("brsh", brush);
    ast.changeAnimation("brsh");
    ast.y=350;
    ast.velocityX=0;
    ast.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    ast.addAnimation("gm", gym);
    ast.changeAnimation("gm");
    ast.y=350;
    ast.velocityX=0;
    ast.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    ast.addAnimation("bth", bath);
    ast.changeAnimation("bth");
    ast.y=350;
    ast.velocityX=0;
    ast.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    ast.addAnimation("ett", eat);
    ast.changeAnimation("ett");
    ast.y=350;
    ast.velocityX=0;
    ast.velocityY=0;
  }
 if(keyDown("m")){
   ast.addAnimation("moving", move);
   ast.changeAnimation("moving");
   ast.y=200;
   
   ast.velocityX=1;
   ast.velocityY=1;
 }
  drawSprites();
  fill("white");
  text("Instructions:", 200, 50);
  fill("white");
  text("Up Arrow=Brushing", 200, 70);
  fill("white");
  text("Down Arrow=Gymming", 200, 80);
  fill("white");
  text("Up Arrow=Eating", 200, 90);
  fill("white");
  text("Right Arrow=Bathing", 200, 100);
  fill("white");
  text("m key=Moving", 200, 110);
}