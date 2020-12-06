var player,playerImg,computer,computerImg;
var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var playerImg1,playerImg2,playerImg3;
var rand;
var back;
var cImage=0;
var pImage=0;
var i=0;
var number;
var playerImg4,playerImg5;
//var gameOverImg,gameOver;
var TimeLimit;
 var WIN=2;
var sound;




function preload(){
  
  
    playerImg1=loadImage("16.png");
    playerImg2=loadImage("11.png");
    playerImg3=loadImage("down.png");
   playerImg4=loadImage("right.jpg");
   playerImg5=loadImage("girl 2.png");
   back=loadImage("redyellowbg.jpg");
    sound=loadSound("bensound-funnysong.mp3");
 

  
 
 
  
  
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  
   player=createSprite(250,350,250);
   player.scale=0.5;
    pImage =3;
  
     computer=createSprite(990,350,250,70);
    computer.scale=0.5;
    cImage=1;
  
 
  
   
  score=0;
  TimeLimit=0;
  
 sound.play();
  

  
  
}

function draw() {
  background(back);
   textSize(30);
  
if (gameState===PLAY){
  

  TimeLimit=TimeLimit+Math.round(getFrameRate()/60);
  
  
  if(TimeLimit<1000&& score>=500){
     gameState=WIN;
     
    
  }
  
  else if (TimeLimit > 1000 && score <500){
     gameState=END;
    
  }
  
  
   
  
  i=0;
  
  textSize(30);
  fill("black");
   text("Score :"+score,20,30);
   text ("Score 500 to Win",670,30);
  
  
  textSize(20);
  text ("Use Arrow Keys to dance",300,700);
  
  
  
   
  

  if(keyDown(UP_ARROW)){
    computer.addImage(playerImg1);
    cImage=1;
   
}
  
  if(keyDown(RIGHT_ARROW)){
  computer.addImage(playerImg2);
    cImage=2;
  }
  
   if(keyDown(LEFT_ARROW)){
   computer.addImage(playerImg4);
     cImage=3;
 }
   if(keyDown(DOWN_ARROW)){
   computer.addImage(playerImg3);
     cImage=4;
 }
  
  
  
    
    
  
 
 
  
  
  
 if(frameCount%10==0){
   rand=Math.round(random(1,3));
   
  
   }
  switch(rand){
      case 1:player.addImage(playerImg3);
      pImage=1;
      break;
      case 2 :player.addImage(playerImg4);
      pImage=2;
    
      break;
      case 3 :player.addImage(playerImg1);
      pImage=3;
      
      break;
     
      case 4 :player.addImage(playerImg2);
      pImage=4;
      
      break;
       case 5:player.addImage(playerImg5);
      pImage=5;
      
      break;
     
      
      default:break ;
      
      
      
  }
  
  
      
      
   
  if(cImage===pImage){
  i=1;
  
  }
 
  if(i===1){
    score=score+1;
    
    
  }
}
 else  if(gameState===END){
     fill("black");
    text ("You lose",150,100);
    sound.stop();
  }
  else if (gameState===WIN){
     fill("black");
    text("You win",150,100);
   
  }
  
  
     drawSprites(); 
    
}



