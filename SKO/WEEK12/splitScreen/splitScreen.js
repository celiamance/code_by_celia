// typing function initally achieved with help from Ray
// shuffle function added by k.donnachie
var x, y;
var font, song;
var margin = 50; //space on either side
var topmargin = 40;
var para1 = ('Although these structures occupy the same space, they organise it differently and thereby create mutating patterns of signification. Translated into a digital medium, Vs line sequences reorganise yet again, using the flexibility offered by appearing and disappearing text to create a possibility space even greater than the print book. When read alongside each other, the print and electronic texts offer a remarkably rich matrix in which to explore the varying dynamics of freedom and constraint produced performed by durable marks and flickering signifiers.');
var para = ('although these structures occupy the same space , they organise it differently and thereby create mutating patterns of signification . translated into a digital medium Vs line sequences reorganise yet again using the flexibility offered by appearing and disappearing text to create a possibility space even greater than the print book . when read alongside each other the print and electronic texts offer a remarkably rich matrix in which to explore the varying dynamics of freedom and constraint produced performed by durable marks and flickering signifiers .');
var words = para.split(' ');
var words1 = para1.split(' ');
var wx, wy, wx2;
var typesize = 32;
var spacesize = 20;
var linesize = 40;

function preload() {
  font = loadFont('data/VG5000-Regular.otf');
  song = loadSound ('data/keyboard.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245);
  shuffwords = shuffle(words);
  textSize(typesize);
  textFont(font);
  song.play();
  x = random(width-margin);
  y = random(height-50);
}

function draw() {
  fill(0,0,255);
  noStroke();
  rect(0,0, windowWidth/2, windowHeight);
  fill(245);
  noStroke();
  rect(windowWidth/2, 0, windowWidth/2, windowHeight);
  
//  // left paragraph
 fill(245);
  wx = margin; // space on either side
  wy = 50; //top margin
  var extraSpace = 0;
  for (let w=0; w<words1.length; w++) {
    if (wx+textWidth(words1[w])<=windowWidth/2-margin){
    noStroke();
  if (frameCount > 30 * w) {
    text(words1[w], wx, wy+50);
}
  wx+=textWidth(words1[w])+spacesize;
}
else {
  wx=margin;
  wy+=linesize;
  w--;
  }
}

// right paragraph
 fill(0,0,255);
  wx2 = windowWidth/2 + margin;
  wy = 50;
  for (let w=0; w<words.length; w++) {
    if (wx2+textWidth(shuffwords[w])<=width-margin){
    noStroke();
  if (frameCount > 30 * w) {
    text(shuffwords[w], wx2, wy+50);
}
  wx2+=textWidth(shuffwords[w])+spacesize;
}
else {
  wx2=windowWidth/2 + margin;
  wy+=linesize;
  w--;
  }
  }
    if(frameCount % 20 == 0){
  var x2 = random(width-margin);
  var y2 = random(height-50);
  strokeWeight(4);
  stroke(135,155,255);
  line(x,y,x2,y2);
  x = x2;
  y = y2;
  }
}

function mousePressed() {
 if (song.isPlaying()) {
   song.stop(); // if the song is playing, stop it
 }
 else{
   song.play();
 }
}
