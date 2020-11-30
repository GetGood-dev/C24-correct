
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor,paperBall,box_bottom,box_left,box_right;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  	floor = new Ground(400,680,800,50);
    paperBall = new paper(100,350,20,20);
    box_bottom = new Box(650,645,200,20);
  	box_left = new Box(560,600,20,100);
	  box_right = new Box(740,600,20,100);

	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  text("press Space to jump",400,350)

  if(keyWentDown("space"))
  {
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1.5,y:-25})
  }
  if(0<1)
  {
    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:0,y:1})
  }

  paperBall.display();
  floor.display();
  box_bottom.display();
  box_right.display();
  box_left.display();
   
  drawSprites();
 
}



