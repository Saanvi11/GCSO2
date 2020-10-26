const Car= Matter.car;
const Wall= Matter.wall;

var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  car = Car.create();
  world = car.world;

  speed=random(55, 90);
  weight= random(400, 1500);

  createSprite(400, 200, 50, 50);
}s

function draw() {
  background(255,255,255);  
  drawSprites();
}