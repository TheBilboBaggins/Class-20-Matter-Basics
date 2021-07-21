
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var bodies;
var ground
function setup() {
  createCanvas(400, 400);
  engine = Engine.create()
  world = engine.world
  var BPPS = {
    restitution: 0.5,
    frictionAir: 0.01

  }
  bodies = Bodies.circle(200, 200, 100, BPPS)
  World.add(world, bodies)
  console.log(bodies)
  var PPS = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 375, 25, 400, PPS)
  World.add(world, ground)

}

function draw() {
  background(51);

  ellipseMode(RADIUS)
  ellipse(bodies.position.x, bodies.position.y, 20, 20)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 25)
  Engine.update(engine)
}

