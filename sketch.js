var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle = null;


var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


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

}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  fill(255);
  textSize(30)
  text("500",10,550)
  text("500",90,550)
  text("500",170,550)
  text("500",250,550)
  text("100",330,550)
  text("100",410,550)
  text("100",490,550)
  text("200",560,550)
  text("200",650,550)
  text("200",730,550)
  

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   
 
//  for (var j = 0; j < particles.length; j++) {
//     particles[j].display();
    

//   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }
if(particle !== null){
 particle.display()
  positionScore();
 }
  // if(particles !== null){
    // positionScore();
//}
fill(255)
textSize(20)
text("score : "+ score,20,30);
}

   function mousePressed(){
  particle = new Particle(mouseX, 10, 10);
  particle.display()
  
  
}

function positionScore(){
  //console.log(particle.body.position.y)

  if(particle !== null){
    console.log("particle not null")
  if(particle.body.position.x >10 && particle.body.position.x<70 && particle.body.position.y >550 ){
    console.log("first if")
    score +=500;
    particle = null;
  }
  else if(particle.body.position.x >80 && particle.body.position.x<150 && particle.body.position.y > 550 ){
    score +=500;
    console.log("secomd if")
    particle = null;
  }
  else if(particle.body.position.x >160 && particle.body.position.x<230  && particle.body.position.y > 550){
    score +=500;
    console.log("third if")
    particle = null;
  }
  else if(particle.body.position.x >240 && particle.body.position.x<310  && particle.body.position.y > 550){
    score +=500;
    console.log("fourth if")
    particle = null;
  }
  else if(particle.body.position.x >320 && particle.body.position.x<390  && particle.body.position.y > 550){
    score +=100;
    console.log("fourth if")
    particle = null;
  }
  else if(particle.body.position.x >400 && particle.body.position.x<470  && particle.body.position.y > 550){
    score +=100;
    console.log("fourth if")
    particle = null;
  }
  else if(particle.body.position.x >480 && particle.body.position.x<550  && particle.body.position.y > 550){
    score +=100;
    console.log("fourth if")
    particle = null;
  }
  else if(particle.body.position.x >550 && particle.body.position.x<630  && particle.body.position.y > 550){
    score +=200;
    console.log("fourth if")
    particle = null;
  }
  else if(particle.body.position.x >640 && particle.body.position.x<710  && particle.body.position.y > 550){
    score +=200;
    console.log("fourth if")
    particle = null;
  }
  else if(particle.body.position.x >720 && particle.body.position.x<790  && particle.body.position.y > 550){
    score +=200;
    console.log("fourth if")
    particle = null;
  }
  console.log(score);
}
}