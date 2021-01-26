
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var box1 , box3, box4;
var box2 , box5;
var ground1;
var pig1 , log1 , log2 , log3 , log4 , pig2 ;
var bird1 , platform;

function setup(){

  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world;
  box1 = new Box(900,320,50,50);
  box2 = new Box(700,320,50,50);
  box3 = new Box(900,240,50,50);
  box4 = new Box(700,240,50,50);
  box5= new Box(800,170,50,50);
  pig1 = new Pig(800,320);
  pig2 = new Pig(800,240);
  log1= new Log(800,260,300,PI/2);
  log2= new Log(800,190,300,PI/2);
  log3= new Log(750,140,150,PI/7);
  log4= new Log(850,140,150,-PI/7);
  bird1= new Bird(400,200);
  ground1 = new Ground(600,380,1200,10);
  platform = new Ground(150,275,300,200);

}

function draw(){
  background(250);
  Engine.update(engine);
  box1.display();
  ground1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  log2.display();
  pig2.display();
  log3.display();
  log4.display();
  box5.display();
  bird1.display();
  platform.display();
}