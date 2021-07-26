var hr;
var mn ;
var sc ;



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  translate(200,200)
  rotate(-90);
  sc=second();
  mn=minute();
  hr=hour();
  
  scAngle = map(sc,0, 60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0, 12,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(mnAngle);
  stroke(255,100,150);
  strokeWeight(7);
  line(0,0,75,0);
  pop();
  push();
  rotate(hrAngle);
  stroke(255,1,30);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  strokeWeight(10);
  noFill();
  stroke(255,30,1);
  arc(0,0,300,300,0,scAngle)
  arc(0,0,250,250,0,mnAngle)
  arc(0,0,200,200,0,hrAngle)
  
}