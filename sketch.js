const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine; 
var world;
var body;
var ground1;
var division1;
var plinko1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle1;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
ground1 = new Ground (240,795,480,10);
for(var k = 0; k <= width; k = k + 80){
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

};

 
function draw() {
  background(2,2,2);  
ground1.display();
for (var j = 40; j <= width; j = j + 50)
{
plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <= width-10; j = j + 50)
{
plinkos.push(new Plinko(j,125));
}
for (var j = 40; j <= width; j = j + 50)
{
plinkos.push(new Plinko(j,175));
}
for (var j = 15; j <= width-10; j = j + 50)
{
plinkos.push(new Plinko(j,225));
}

for (var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
    }
    
for (var i = 0; i < particles.length; i++){
particles[i].display();
}

if(frameCount%90===0) {
particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
drawSprites();
}