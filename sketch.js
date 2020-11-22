const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisons = [];

var divisonHeight = 300; 


function setup() {
  engine = Engine.create();
	world = engine.world;
  
  createCanvas(500,800);

  ground = new Ground(249,700,505,20);
 
  divison1 = new Divisons(5,550,10,300);
  divison2 = new Divisons(85,550,10,300);
  divison3 = new Divisons(165,550,10,300);
  divison4 = new Divisons(245,550,10,300);
  divison5 = new Divisons(325,550,10,300);
  divison6 = new Divisons(405,550,10,300);
  divison7 = new Divisons(493,550,10,300);

  for (var j = 25; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
for (var j = 10; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
}
for (var j = 25; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275))
}
for (var j = 10; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
}


  Engine.run(engine);
}

function draw() {
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  background("black");  
 
  ground.display();

  divison1.display();
  divison2.display();
  divison3.display();
  divison4.display();
  divison5.display();
  divison6.display();
  divison7.display();

  for (var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
 
  for (j = 0; j < particles.length; j++){
    particles[j].display();
  }
}

