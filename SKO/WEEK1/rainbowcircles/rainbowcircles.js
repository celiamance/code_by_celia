function setup() {
createCanvas (500,500);
background (255,0,0);
stroke(0); //the colour of the stroke
strokeWeight(5); //the line thickness
line (100,100,400,400); //(x1,y1,x2,y2) stationary points

}


function draw() {
  
strokeWeight(1);
fill (mouseX, (mouseX+mouseY)/4, mouseY/2);
//rect (100,100,300,300); //rect(x1,y1,width,height)
fill (255-mouseY, (mouseX+mouseY)/4, mouseX/2);
ellipse (mouseX,mouseY,100,100); //centre x, centre y, width, height

}
