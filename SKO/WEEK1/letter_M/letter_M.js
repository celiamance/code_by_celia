function setup() {
createCanvas (500,500);
background (250,248,242);
}


function draw() {
strokeWeight (3);
stroke (250-mouseX, (mouseX+mouseY)/4, mouseX/2);
line (125,175,125,350);
line (225,350,325,175);
line (100,350,150,350);
line (100,175,125,175);
line (375,175,400,175);
line (300,350,400,350);
strokeWeight (3);
stroke (250-mouseX, (mouseX+mouseY)/4, mouseX/2);
fill (250-mouseX, (mouseX+mouseY)/4, mouseX/2);
rect (325,175,50,175);
quad (125,175,175,175,275,350,225,350);
}
