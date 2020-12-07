
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var paper1;
var dustbinSide1,dustbinSide2,dustbinSide3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,660);
	paper1 = new Paper(100,625,10,{isStatic:false,gravity:3.0});
	dustbinSide1 = new Dustbin(600,630,200,20);
	dustbinSide2 = new Dustbin(500,590,20,100);
	dustbinSide3 =new Dustbin(700,590,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //keyPressed();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinSide3.display();
  ground1.display();
  paper1.display();
 

 
}

function keyPressed(){
	if (keyDown === UP_ARROW){
	Matter.Body.applyForce(paper1,paper1.body.position,{x:100,y:100});
	Matter.Body.setStatic(paper1,false)
	//paper1.velocityY=5;
	//paper1.velocityY = paper1.velocityY-5;
	
	}
}

