function setup() {
createCanvas (500,500);
background (250,248,242);
}


function draw() {
strokeWeight (3);
stroke (250-mouseX, (mouseX+mouseY)/4, mouseX/2);
fill (250-mouseX, (mouseX+mouseY)/4, mouseX/2);
ellipse (250,250,300,175);
stroke (250,248,242);
fill (250,248,242);
ellipse (270,250,130,150);
rect (260,235,150,30);
}
