function preload() {
// ensure the .ttf or .otf font stored in the assets directory
// is loaded before setup() and draw() are called
// must have already saved your sketch to drag in a font
// command k to open data folder
font = loadFont('data/LetterGothicStd.otf');

}
function setup() {
createCanvas (600,600);
background (240);
fill (0);
textSize (32);
textFont (font); // could have combined - textFont(font,32);
textAlign (CENTER);
}


function draw() {
textSize (10);
text ('code', 300,150);
textSize (20);
text ('words', 300,300);
textSize (30);
text ('studio', 300,500);
}
