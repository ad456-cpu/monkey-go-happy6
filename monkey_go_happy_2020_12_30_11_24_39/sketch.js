 
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
  
  monkey = createSprite(50, 250, 10, 10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(70, 350, 800, 10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  
  
  survialTime = 0;
  
}


function draw() {
  
 background (188);
 text("Survial Time:"+  survialTime, 100, 50);
  
  
  
 //Monkey
  monkey.collide(ground);
  //PLAY
  //if(gameState === PLAY){
    
    survialTime = Math.round(frameCount/frameRate());
     
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }    
    
   
   
  //Gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
    
  
  
    
  
  food();
  obstacles();
    
    
      
    
    
    if(obstaclesGroup.isTouching(monkey)){
  obstaclesGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  obstaclesGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1); 
    }
        
    
      
    
  
  
  
  
 

  drawSprites();
}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0){
    obstacle = createSprite(800,325,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 300;
    obstacle.scale = 0.1 ;
    obstaclesGroup.add(obstacle);
  }




 
 


 
}






