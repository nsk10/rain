const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var t1,t2,t3,t4,w1;
var drops = [], man, thunderCreatedFrame, thunder;
function preload(){
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");
    t3 = loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");
    w1= loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png",
    "images/Walking Frame/walking_8.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,700);
    
    if(frameCount % 150 === 0){
        for(var i=0;i<100;i++){
            drops.push(new Drops(random(0,400),random(0,100)));
        }
    }
    umbrella = new Umbrella(200,400);

    man = createSprite(200,500);
    man.addAnimation("walking",w1);
    man.scale= 0.5;
}

function draw(){
    background(0);
    Engine.update(engine);
   

    for(var i=0;i<100;i++){
        drops[i].display();
        drops[i].updateY();
    }

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(t1);
            break;
            case 2: thunder.addImage(t2);
            break; 
            case 3: thunder.addImage(t3);
            break;
            case 4: thunder.addImage(t4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    drawSprites();
}   

