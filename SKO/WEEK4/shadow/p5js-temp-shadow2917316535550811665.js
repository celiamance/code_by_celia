function preload() {
 font = loadFont('data/GlyphWorld-Desert.otf'); 
}

function setup() {
createCanvas (windowWidth, windowHeight);
background (0);
textSize (100);
textFont (font);
textAlign (CENTER); 
}


function draw() {
background (0,7);
strokeWeight(2)
stroke (0);
fill (255);
text ('shadow', mouseX, mouseY);
}

function keyPressed () {
background (0);
}
