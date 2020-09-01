
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, bin, bin2, bin3, ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	ball = new Paper(140,20,20);
	bin = new Dustbin (700,590,100,10);
	bin2 = new Dustbin2 (645,590,10,170);
	bin3 = new Dustbin2 (747,590,10,170);

	ground = new Ground (400,600,800,10);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("skyblue");
  ball.display();
  bin.display ();
  ground.display();
  drawSprites();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:65, y:-55});
	}
}



