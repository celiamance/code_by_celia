// achieved with help from Ray!!

var sentence, words;

function setup() {
  sentence = ('Although these structures occupy the same space they organise it differently and thereby create mutating patterns of signification translated into a digital medium Vs line sequences reorganise yet again using the flexibility offered by appearing and disappearing text to create a possibility space even greater than the print book when read alongside each other the print and electronic texts offer a remarkably rich matrix in which to explore the varying dynamics of freedom and constraint produced performed by durable marks and flickering signifiers');
  words = sentence.split(' ');
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textFont('Times');
}

function draw() {
  background(255);
  noStroke();
  fill(0,0,255);
  var extraSpace = 0;
  for (let i = 0; i < words.length; i++) {
  if (frameCount > i * 50) {
  var wordMarginLeft = 30 * i;  
  if (i > 0) {
     extraSpace = extraSpace + words[i - 1].length * 13;
  }
  text(words[i], wordMarginLeft + extraSpace, 20, width, height);
  }
 }
}
