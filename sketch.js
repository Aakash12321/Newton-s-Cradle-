const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper1, trash1, trash2, trash3, ground;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	
	
	//Create the Bodies Here.
	roof = new Ground(800,50,1600,20);

	//trash1 = new Trash(635,640,120,120);

	
	bob1 = new Bob(50,250,50)
	bob2 = new Bob(50,250,50)
	bob3 = new Bob(50,250,50)
	bob4 = new Bob(50,250,50)
	bob5 = new Bob(50,250,50)
	
	rope1 = new Rope(bob1.body,roof.body,-250,0)
	rope2 = new Rope(bob2.body,roof.body,-250,0)
	rope3 = new Rope(bob3.body,roof.body,-250,0)
	rope4 = new Rope(bob4.body,roof.body,-250,0)
	rope5 = new Rope(bob5.body,roof.body,-250,0)
	Engine.run(engine);
	//console.log(trash1);
	//console.log(trash2.body.position.x);
  
}


function draw() {
  background(200);
  
  //keyPressed();

  roof.display(); 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  
	}
}
