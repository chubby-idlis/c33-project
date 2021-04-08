var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  var Particle;
  var chanceCount = 5;
  var gameState = "start"; 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   if(keyCode === 32){
   mousePressed();  
   chanceCount = chanceCount - 1;
       
         
   }
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    if(partacle! = null){
      partacle.display();
      if(partacle.body.position.y > 760 && partacle.body.position < 300){
       score = score + 500
       partacle = null; 
      }
      if(partacle.body.position.y > 301 && partacle.body.position < 600){
        score = score + 100
        partacle = null; 
    }
    if(partacle.body.position.y > 900 && partacle.body.position < 601){
      score = score + 200
      partacle = null; 

    };    
function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
  if(chanceCount = 0){
    gamestate = "end"
    partacle = new Partacle(mousex,10,10,10);
    chanceCount = 5;
}
}