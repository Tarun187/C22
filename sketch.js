const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1;


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  myengine = Engine.create();
  //myworld is myengine's world
  myworld = myengine.world;

  var options = {
    isStatic : true
  }
Ground = Bodies.rectangle(200, 390, 400, 20,options);
World.add(myworld,Ground);

ball =Bodies.circle(200,100,20,{restitution: 1})
World.add(myworld,ball);
  Engine.run(myengine);
  console.log(ball);
}

function draw() {
  background(255,255,255);  

  rectMode(CENTER);
  rect(Ground.position.x,Ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,40);
  //drawSprites();
}