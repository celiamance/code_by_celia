function preload() {
// ensure the .ttf or .otf font stored in the assets directory
// is loaded before setup() and draw() are called
// must have already saved your sketch to drag in a font
// command k to open data folder
font = loadFont('data/LetterGothicStd.otf');

}

var spin=0;
var letterSize;

function setup() {
createCanvas (600,600);
background (240);
fill (0);
angleMode (DEGREES);
textSize (32);
textFont (font); // could have combined - textFont(font,32);
textAlign (CENTER);
frameRate(15);
}


function draw() {
fill(0); //text ink colour
translate(300,300); //changes reference point
rotate(spin);
textSize (letterSize);
textFont (font);
text ('Im spinning around',0,21);
//spin=spin+7 //spin+int(mouseX/50-300);
spin+=map(mouseX,0,600,-10,10); //this will make the mouseX affect the spin direction and speed
letterSize = map(mouseY, 0,600,8,72);
stroke(0);
pop();
background(240,30);
}
