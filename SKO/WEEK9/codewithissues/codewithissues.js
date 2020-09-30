// achieved with help from Ray!!
// shuffle function added by k.donnachie

var sentence, words, type;

function setup() {
  sentence = ('Although these structures occupy the same space they organise it differently and thereby create mutating patterns of signification translated into a digital medium Vs line sequences reorganise yet again using the flexibility offered by appearing and disappearing text to create a possibility space even greater than the print book when read alongside each other the print and electronic texts offer a remarkably rich matrix in which to explore the varying dynamics of freedom and constraint produced performed by durable marks and flickering signifiers');
  words = sentence.split(' ');
  shuffwords=shuffle(words);
  //type = random(words); // I am also trying to implement a random variable so that random words from the string are typed, however, it either says random is not defined or it just prints each letter from a single random word
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textFont('Times');
}

function draw() {
  background(255);
  noStroke();
  fill(0,0,255);
  var extraSpace = 0;
  var rightMargin = windowWidth-50;
  for (let i = 0; i < words.length; i++) {
  if (frameCount > i * 50) {
  var wordMarginLeft = 30 * i;  
  if (i > 0) {
     extraSpace = extraSpace + shuffwords[i - 1].length * 13; //change to shuffwords
  }
  //text(words[i], wordMarginLeft + extraSpace, 20, rightMargin, height); // I expected the rightMargin variable to create a limitation for the text box width
  text(shuffwords[i], wordMarginLeft + extraSpace, 20, rightMargin, height);
  }
 }
}
