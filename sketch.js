const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rover, roverImg, ground, groundImg;
var water=[];
var alienClass1, alienClass1Img, alienClass2, alienClass2Img, alienClass3, alienClass3Img;
var fireballImg, heartImg,rockImg,laserImg, toolImg, waterImg;
var points=0;
var waterCount=0;
var waterGroup,alienClass1Group;
var alienClass1Count=0;
var score=0;
var engine, world;
 
function preload(){
roverImg=loadImage("rover.png");
groundImg=loadImage("marsBackground.png");
waterImg=loadImage("images/water.png");
alienClass1Img=loadImage("images/alienclass1.png");
alienClass2Img=loadImage("images/alienClass2.png");
alienClass3Img=loadImage("images/alienclass3.png");
fireballImg=loadImage("images/fireball.png");
heartImg=loadImage("images/heart.png");
rockImg=loadImage("images/rock.png");
laserImg=loadImage("images/laser.png");
toolImg=loadImage("images/tool.png");
var positionX = 200, positionY = 650;



}


function setup() {

  
  engine = Engine.create(); 
  world = engine.world;
 
  createCanvas(2500,800);
  
  ground= new Ground(1000,650, 2000, 70);
  
  rover = new Rover(200, 650);
  
  //rover.velocityX=1;
  
  //waterGroup= new Group();
  alienClass1Group=new Group();

 
}

function draw() {
  background(groundImg);
 // engine.update(engine);
  rover.display();
  if(keyDown(UP_ARROW) && (rover.body.y>300)){
    positionY-= 5
    Matter.Body.setPosition(rover.body,positionY);
    console.log(rover.y);
  }

  if(keyDown(DOWN_ARROW) && (rover.body.y<650)){
    positionY+= 5
    Matter.Body.setPosition(rover.body,positionY);
  }


 
  

  displayWater();
  
  
  /* if(waterGroup.isTouching(rover)){
    waterGroup.destroyEach();
    waterCount+=1;
  }
*/
textSize(30);
fill("white");
text("Goal: Collect water droplets and avoid the aliens!", 100,40)

textSize(30);
fill("teal");
text("Points: ", 1500,40);
  
displayAlienClass1();



  drawSprites();
}



function displayAlienClass1(){
  if(frameCount%100==0){
    
    alienClass1=createSprite(500, 400, 20, 20);
    alienClass1.addImage(alienClass1Img);
    alienClass1.scale=0.3;
    alienClass1.x=Math.round(random(rover.x+40, 2250));
    alienClass1.y=Math.round(random(300, 650));
    alienClass1Group.add(alienClass1);

  }


}




 function displayWater(){
    if(frameCount%70==0){
   
    waterX=Math.round(random(rover.x+50, 2250));
    waterY=Math.round(random(300, 650));
    console.log(waterX);
    console.log(waterY);

    water=new Water(waterX, waterY);

    
  } 


}
 function keyPressed(){
  
  /*if(keyDown(RIGHT_ARROW)){
    rover.body.velocityX=3.5;
  }
  
  if(keyDown(LEFT_ARROW)){
    rover.body.velocityX=1.5;
    rover.body.x-=5;
  }
  */
 }

