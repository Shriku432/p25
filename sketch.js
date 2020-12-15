const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper1;


function setup() {
  createCanvas(1000, 800);

  groundSprite = createSprite(0,0,1400,7);


  

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(width/2, 650, width, 10,{isStatic : true});
  World.add(world, ground);

var options = {
'restitution':0.2,
'friction':0.5,
'density':1.0


}
  

    paper = Bodies.circle(70 , 200 , 10 ,options);
    World.add(world, paper);

  Engine.run(engine);
  
}


function draw() {

  background(0);

  Engine.update(engine);
  rectMode(CENTER);
  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y

  ellipse(paper.position.x,paper.position.y,20,20);

  
  groundObject.display();
  dustbinObj.display();
  paperObject.display();


 
  
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper,paper.position,{x:8.7,y:-20});



}


}

