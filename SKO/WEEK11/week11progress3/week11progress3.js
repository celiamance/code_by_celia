// typing function initally achieved with help from Ray
// shuffle function added by k.donnachie

var font;
var margin = 60;
var topmargin = 50;
var para = ('although these structures occupy the same space they organise it differently and thereby create mutating patterns of signification translated into a digital medium Vs line sequences reorganise yet again using the flexibility offered by appearing and disappearing text to create a possibility space even greater than the print book when read alongside each other the print and electronic texts offer a remarkably rich matrix in which to explore the varying dynamics of freedom and constraint produced performed by durable marks and flickering signifiers');
var words = para.split(' ');
var wx, wy;
var typesize = 32;
var spacesize = 25;
var linesize = 40;

function preload() {
  font = loadFont('data/Migra-Extralight.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  shuffwords = shuffle(words);
  textSize(typesize);
  textFont(font);
    if (
        words === 'of' ||
        words === 'a' ||
        words === 'the' ||
        words === 'it' ||
        words === 'these' ||
        words === 'they' ||
        words === 'and'
      ) {
        fill(255,0,0);
      } else {
        fill(0,0,255);
      }
}

function draw() {
 background(255);
  wx = margin;
  wy = 50;
  var extraSpace = 0;
  for (let w=0; w<words.length; w++) {
    if (wx+textWidth(words[w])<=width-margin){
    noStroke();
  if (frameCount > 30 * w) {
    text(words[w], wx, wy+50);
}
  wx+=textWidth(words[w])+spacesize;
}
else {
  wx=margin;
  wy+=linesize;
  w--;
  }
}

  wx = margin;
  wy = 50;
  for (let w=0; w<words.length; w++) {
    if (wx+textWidth(shuffwords[w])<=width-margin){
    noStroke();
  if (frameCount > 30 * w) {
    text(shuffwords[w], wx, wy+windowHeight/2);
}
  wx+=textWidth(shuffwords[w])+spacesize;
}
else {
  wx=margin;
  wy+=linesize;
  w--;
  }
  }

}
