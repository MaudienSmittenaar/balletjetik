var x, y, v;

function setup() {
  createCanvas(400, 400);

  x = 0;
  y = 200;
  v = 5;
}

function draw() {
  background(220);
  ellipse(x, y, 50, 50);
  x = x + v;

  if(x<= 0 || x > 400){
    v = v * -1;
  }
}