function setup() {
  createCanvas(600,600);
  angleMode(DEGREES)
  frameRate(100);
}

function draw() {
  background(100,100,100);  
translate(300,300);
rotate(-90);
  var hr = hour();
  var mn = minute();
  var sc = second();
 
strokeWeight(8)
stroke(255,100,150)
noFill();
  
  var end = map (hr%12,0,12,0,360)
  arc(0,0,360,360,0,end)
  push();
  rotate(end)
  stroke(255,100,150)
line (0,0,80,0)
pop();
  stroke(150,100,255)
  strokeWeight(8)
  var end2 = map (mn,0,60,0,360)
  arc(0,0,380,380,0,end2)
  push();
  rotate(end2)
  stroke(150,100,255)
line (0,0,100,0)
pop();
  stroke(150,255,100)
  strokeWeight(8)
  
  var end3 = map (sc,0,60,0,360)
  arc(0,0,400,400,0,end3)
  push();
  rotate(end3)
  stroke(150,255,100)
line (0,0,130,0)
pop();



  drawSprites();

  // var ml = millis();
  // fill(255);
  // noStroke();
  // text (hr +':'+ mn + ':'+ sc,300,300)
  
}