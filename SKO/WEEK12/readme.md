# code+words / week 12

<img src="gif640x640">

[Final outcome](https://celiamance.github.io/codewords/SKO/WEEK12/splitScreen5/)

[Final showcase!](https://simandy.github.io/codewords/)

## + final additions

Before our final submission, to further enhance my existing sketch I added in some sound and make the randomised text flickering. I recorded a typing sound myself as I wasn’t really happy with the free ones online! I just used the voice memo app on my phone and our old mechanical keyboard for those satisfying clicks. I wanted to make the sound a bit grittier, so I found an electrical buzzing sound online and played both of them at once and I think they paired quite well. The flickering effect accentuated the erratic feeling of the random text that sometimes didn't make sense! I also chatted with [Taj](https://github.com/TajHealy/CodeWords) about how to make text adaptive to screen size. With his help and some extra clarification from Karen, I managed to use mapping to make the text size, space size, leading and margins adaptable to different phone or computer screen sizes, even as you resize the window in real time.

How I tested my final before the showcase:
- my phone
- my sister's phone (because hers is bigger)
- my laptop
- my dad's desktop computer

Thankfully the text translated well to all of the formats! However, through this testing I discovered that the mousePressed function doesn't work on touch screen devices, so I added in a touchStarted function so the sound would still work.

```
// typing function initally achieved with help from Ray
// shuffle function added by k.donnachie
// flashing connecting lines adapted from https://editor.p5js.org/chjno/sketches/S1wJDPdY-
// typing sound effect made my me
// royalty free light buzzing sound effect from https://www.fesliyanstudios.com
// font is VG5000 by Justin Bihan from velvetyne.fr
var x, y;
var font;
var type;
var buzz;
var margin = 50;
var topmargin = 40;
var para1 = ('Although these structures occupy the same space, they organise it differently  and thereby create mutating patterns of signification. Translated into a digital medium, Vs line sequences reorganise yet again, using the flexibility offered by appearing and disappearing text to create a possibility space even greater than the print book. When read alongside each other, the print and electronic texts offer a remarkably rich matrix in which to explore the varying dynamics of freedom and constraint produced/ performed by durable marks and flickering signifiers.');
var para = ('although these structures occupy the same space , they organise it differently and thereby create mutating patterns of signification . translated into a digital medium Vs line sequences reorganise yet again using the flexibility offered by appearing and disappearing text to create a possibility space even greater than the print book . when read alongside each other the print and electronic texts offer a remarkably rich matrix in which to explore the varying dynamics of freedom and constraint produced / performed by durable marks and flickering signifiers .');
var words = para.split(' ');
var words1 = para1.split(' ');
var wx, wy, wx2;
var multiplier;
var typesize;
var spacesize;
var linesize;
var i = 0;
var displayMessage = true;

function preload() {
  font = loadFont('data/VG5000-Regular.otf');
  soundFormats('mp3');
  type = loadSound('data/keyboard.mp3');
  buzz = loadSound('data/buzz.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(245);
  multiplier = map(width,300,1800,0.25,1);
  typesize = (map(width,600,1650,30,35));
  spacesize = 17*multiplier;
  linesize = 48*multiplier;
  shuffwords = shuffle(words);
  textSize(typesize*multiplier);
  textFont(font);
  x = random(width);
  y = random(height);
  analyzer = new p5.Amplitude();
  analyzer.setInput(type);
  type.setVolume(0.5);
  analyzer = new p5.Amplitude();
  analyzer.setInput(buzz);
  buzz.setVolume(1.0);
  buzz.loop();
}

function draw() {
  fill(0,0,255);
  noStroke();
  rect(0,0, windowWidth/2, windowHeight);
  fill(245);
  noStroke();
  rect(windowWidth/2, 0, windowWidth/2, windowHeight);
  textSize(typesize*multiplier);
  if (displayMessage){
    textAlign(RIGHT);
    fill(245);
    text('Click screen', windowWidth/2-4, 40);
    textAlign(LEFT);
    fill(0,0,255);
    text('for sound.', windowWidth/2+2, 40);
  }

  textSize(typesize*multiplier);
// left paragraph
  fill(245);
  wx = margin*multiplier; // space on either side
  wy = 50*multiplier; //top margin
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
  wx=margin*multiplier;
  wy+=linesize;
  w--;
  }
}

// right paragraph
  i = i + 1;
  if (i % 2 === 0){
    fill(0,0,255);
  } else {
    fill(245);
  }
  wx2 = windowWidth/2 + margin*multiplier;
  wy = 50*multiplier;
  for (let w=0; w<words.length; w++) {
    if (wx2+textWidth(shuffwords[w])<=width-margin){
    noStroke();
  if (frameCount > 30 * w) {
    text(shuffwords[w], wx2, wy+50);
}
  wx2+=textWidth(shuffwords[w])+spacesize;
}
else {
  wx2=windowWidth/2 + margin*multiplier;
  wy+=linesize;
  w--;
  }
  }
  
//connecting random lines
    if(frameCount % 30 == 0){
  var x2 = random(width);
  var y2 = random(height);
  strokeWeight(4);
  stroke(135,155,255);
  line(x,y,x2,y2);
  x = x2;
  y = y2;
  }
  }

function touchStarted() {
  type.play();
  buzz.play();
  displayMessage = false;
}

function mousePressed() {
  type.play();
  buzz.play();
  displayMessage = false;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  multiplier = map(width,300,1800,0.25,1);
  typesize = (map(width,600,1650,30,35));
  spacesize = 17*multiplier;
  linesize = 48*multiplier;
  textSize(typesize*multiplier);
}
```


## + artist statement

‘Split’ is a comparative digital reading experience constructed using creative coding, based on the text ‘The Time of Digital Poetry: from Object to Event’ by American literary critic, N. Katherine Hayles. In this text, Hayles analyses the juxtaposition between digital and physical materiality 
used to alter the interpretation of a text.

My work visualises this exploration into the influence of materiality. Using a split screen, the text on the left types the original format, whereas the text on the right employs digital capabilities to appear in a random order. This references the flexibility of the digital space to easily generate infinite outcomes and as a result, infinite interpretations. The reader is meant to divide their attention between the appearing words and recognise links between the paragraphs, aided by the lines that flash on the screen. The contrasting paragraphs synergise to create an immersive digital reading experience. I used typing and buzzing sound effects to emphasise the digital format and indicate a flowing stream of consciousness split between rigidity and reinterpretation. The text itself is no longer a self-contained object with predetermined physical properties that exist statically, but rather an evolving digital experience that always appears slightly different. My approach aims to recognise the future of digital literature to exist beyond the boundaries of traditional reading formats.


### [[Previous Week]](https://celiamance.github.io/codewords/SKO/WEEK11/) - [[Home]](https://celiamance.github.io/codewords/)
