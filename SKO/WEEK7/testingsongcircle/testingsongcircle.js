var song;
var amp;
var button; 
var volhistory = [];

function preload() {
   song = loadSound('data/jazz.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.play();
  amp = new p5.Amplitude();
  angleMode (DEGREES);
}


function draw() {
  background (0);  
  fill(255);
  noStroke();
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
   
 translate(width/2, height/2);
    beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i]*10, 0, 1, 10, 100);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();
  
  
 // beginShape();
 // for (var i = 0; i <volhistory.length; i++) {
 //   var y = map(volhistory[i], 0, 1, height, 0);
 //  vertex(i, y); 
 // }
 // endShape();
  //ellipse(windowWidth/2, windowHeight/2, windowWidth, vol*1300);
if (volhistory.length > 360) {
 volhistory.splice(0, 1);
}


}


function keyPressed() {
 if (song.isPlaying()){
   song.pause();
 }

 else{
   song.play();
 }
 
}
