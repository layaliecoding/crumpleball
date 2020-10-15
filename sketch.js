
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,200,40);
ground= new Ground (400,680,800,20);
dustbin1= new Dustbin(650,650,200,20);
dustbin2= new Dustbin(750,585,20,150);
dustbin3= new Dustbin(550,585,20,150);
	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
		
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}



