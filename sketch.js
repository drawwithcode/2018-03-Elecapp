function preload(){
  // put preload code here
}
var colorList1= [
  '#4286f4',
  '#c242f4',
  '#81f9bf'];
var colorList2 =[
  '#f2a34f',
  '#76ff00',
  '#ffee00'
];

var colorList3 = [
  '#15d4f2',
  '#0977e5',
  '#f981e3'
  ];



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  noStroke();


}


function draw() {
  background(0);
  for( var x=0; x <=width; x+=60){
    for(var y=0; y <=height; y+=60){
      push();
      translate(x,y);
      rotate(frameCount/20);

      if (mouseX<windowWidth/2) {
        fill(color(random(colorList1)));
      } else {
        fill(color(random(colorList2)));
      }

      ellipse(0,0,50);
      pop();


    }
  }
  if(mouseIsPressed){
  for( var x=0; x <=width; x+=60){
    for(var y=0; y <=height; y+=60){
      push();
      translate(x,y);
      rotate(frameCount/20);
      fill(color(random(colorList3)));
      polygon(0, 0, 20, 3);
      pop()
    }
  }
}

  else {for( var x=0; x <=width; x+=60){
    for(var y=0; y <=height; y+=60){
      push();
      translate(x,y);
      rotate(frameCount/20);
      fill(color(random(colorList3)));
      polygon(0, 0, 20, 6);
      pop()
    }
  }
}
  }
function polygon(x, y, radius, npoints) {

    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
