//created from Karen's amazing tutorial
// next I am trying to work out how to add in a limit to the X value and add in a y value so the text doesn't run off the page, but returns and continues to print the text

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
textSize(24);
textFont('Monospace');
letterX = 5;
sentence = 'It was once a stormy night';
words = sentence.split(' ');
frameRate(5);
}

function draw() {
  //background(0);
  noStroke();
  fill(255);
for (let i=0; i<words.length;i++){ 
  //if (frameCount > i*100){
    if (i>0){  
    for (let j=0; j<words[i-1].length; j++){
      letterX += 18;
    }
    }
    else { letterX += 18;}
   
   writeText(i, letterX);

}
function writeText(i, letterX){
text(words[i], letterX, 50); // words each on separate line
}
}
