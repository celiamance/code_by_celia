//started from a sketch we did in class with Karen
//this is only very preliminary and I have basically only managed to print the text on the screen
//my goal is to have the text appear as if it were being typed
//eventually I would like the text to appear in a randomly generated order and then returns to the 'correct' order once the mouse is moved or some other function

var words;
function preload() {
}
var words = "Although these structures occupy the same space, they organise it differently and thereby create mutating patterns of signification. Translated into a digital medium, V's line sequences reorganise yet again, using the flexibility offered by appearing and disappearing text to create a possibility-space even greater than the print book. When read alongside each other, the print and electronic texts offer a remarkably rich matrix in which to explore the varying dynamics of freedom and constraint produced/ performed by durable marks and flickering signifiers.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);
  noStroke();
  textFont("Monospace");
  textAlign(LEFT);
  fill(0,0,255);
  textLeading(50);
}


function draw() {
  background(255);
  text(words, int(windowWidth/8), windowHeight/4, int(windowWidth/4*3), windowHeight);
  
}
