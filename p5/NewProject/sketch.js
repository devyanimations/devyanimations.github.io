//Your canvas. This is where you'll draw.
function setup() {
  //Your canvas is the size of your browser window.
  createCanvas(windowWidth, windowHeight);
}
//If: the mouse is dragged...
function mouseDragged() 
{ 
  //Then: a 10px line will appear...
  strokeWeight(10);
  //Starting from your previous cursor position.
  line(mouseX, mouseY, pmouseX, pmouseY);
}