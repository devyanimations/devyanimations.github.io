var xVal = 200;
var yVal = 200;

var h = 50;
var w = 100

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background('#AEB0D6');
}

function draw() {
  // put drawing code here
  fill('#F09292');
  stroke('#2E27DB');
  strokeWeight(3);
  rect(mouseX,mouseY,h,w);

 if (mouseIsPressed) {
  fill('#2E27DB');
  stroke('#F09292');
  circle(mouseX,mouseY,100,50);
 }

}