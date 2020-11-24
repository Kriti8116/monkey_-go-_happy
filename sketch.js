
var monkey , monkey_running, ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  
 console.log(ground.x);
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background("white")
    if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
  }
 
 monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  ground.x=ground.width/2;
   
   
  
  food();
  obstacles();
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);
  
  
  
    

 drawSprites(); 
  
  
}



 



function food() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
    banana.scale = 0.1;
   banana.velocityX = -3;
    
     //assign lifetime to the variable
   banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}
function obstacles() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,345,40,10);
    obstacle.y = Math.round(random(120,200));
  obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
   obstacle.velocityX = -3;
    
     //assign lifetime to the variable
   obstacle.lifetime = 200;
    
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
    obstacle.collide(ground);
  }
}