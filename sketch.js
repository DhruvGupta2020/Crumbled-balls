
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = new Ground(400,680,800,10);
	paper = new Paper(50,600,40);
	
	dustbin = new Dustbin(655,685);
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
 
  rectMode(CENTER);
 
  ground.display();
 
 ;
  paper.display();
  dustbin.display();
  
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:260,y:-265});
	}
}


