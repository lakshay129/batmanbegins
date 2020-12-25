const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var raindrops=[];
var maxDrops=200;
var batmn;
var ground;
var buttman;
var thunder;
var thunderi1;
var thunderi2;
var thunderi3;
var thunderi4;

function preload(){
batmni=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
thunderi1=loadImage("1.png");
thunderi2=loadImage("2.png");
thunderi3=loadImage("3.png");
thunderi4=loadImage("4.png");
}

function setup(){
createCanvas(800,700)
engine = Engine.create();
world = engine.world;

batmn=createSprite(0,520,100,100);
batmn.addAnimation("batman",batmni);
batmn.scale=0.5


ground=new gr(420,695)
buttman=new batman(00,439);
for(var i=0;i<maxDrops;i++){
    raindrops.push(new drops(random(0,800),random(0,700)));
 
}



    
    
}

function draw(){
background("black"); 
textSize(26)
text("press space to move",200,200)
Engine.update(engine);
if(frameCount % 100===0){
    thunder=createSprite(400,150,10,10);
    thunder.scale=0.5
 var rand=Math.round(random(1,4));
 switch(rand){
    case 1:thunder.addImage("thunderim",thunderi1);
     break;
     case 2:thunder.addImage("thunderim",thunderi2);
     break;
     case 3:thunder.addImage("thunderim",thunderi3);
     break;
     case 4:thunder.addImage("thunderim",thunderi4);
     break;

 }    
 thunder.lifetime=90;
 }
 if(keyIsDown(32)){
    console.log("velocity")
     Matter.Body.setPosition(buttman.body,{
         x:buttman.body.position.x+10,
         y:439
     })
     batmn.x=batmn.x+10
    }

buttman.display();
ground.display();


for(var r=0;r<maxDrops;r++){
    raindrops[r].display();
    raindrops[r].update();
}


drawSprites();
}   



