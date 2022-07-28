var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("FLOPPA.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.3;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

if(frameCount%100==0){
  apple=createSprite(200,10,30,30);
  apple.velocityY=7;
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.x = Math.round(random(1,400));
}
if(frameCount%200==0){
  orange=createSprite(0,-200,30,30);
  orange.velocityY=3;
  orange.addImage(orangeImg);
  orange.scale=0.1;
  orange.x = Math.round(random(1,800));
}

if(frameCount%150==0){
  red=createSprite(0,-200,30,30);
  red.velocityY=5;
  red.addImage(redImg);
  red.scale=0.05;
  red.x = Math.round(random(1,400));
}


  drawSprites();
  
}
