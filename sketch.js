
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(800,630,20,100);
	box2 = new Box(1000,630,20,100);
	box3 = new Box(900,680,200,20);

	ball1 = new Ball(200,500,20);

	ground = new Box(600,690,1200,10);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  ball1.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:20,y:-50})
}	
}

