const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var poly;

var ball;
var img;

function preload(){
  img = loadImage("hexagon.png");


}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;


  block1 = new Box(600,260,30,40);
  block2 = new Box(570,260,30,40);
  block3 = new Box(540,260,30,40);
  block4 = new Box(630,260,30,40);
  block5 = new Box(660,260,30,40);



  block6 = new Box(585,220,30,40);
  block7 = new Box(555,220,30,40);
  block8 = new Box(615,220,30,40);
  block9 = new Box(645,220,30,40);



  bolck10 = new Box(600,170,30,40);
  block11 = new Box(570,180,30,40);
  block12 = new Box(630,180,30,40);


  block13 = new Box(600,140,30,40);

  ground1 = new Ground(600,285,200,10);
 


 

  poly = new Poly(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new SlingShot(this.ball,{x:150, y:160});

}

function draw() {
  background("grey");
  Engine.update(engine);

  fill(rgb(135, 205, 236));

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();
  fill(rgb(47, 48, 48));

  block13.display();

 

  ground1.display();


  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);


  sling.display();
  poly.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(poly.body,{x:235, y:420})
		sling.attach(poly.body);
	}
}
