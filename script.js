var x, y, vx, vy, x2, y2;

function setup() {
  createCanvas(500, 400);

  x = 200;
  y = 0;
  x2 = 400;
  y2 = 0;
  vx = 5;
  vy = 5;
}

function draw() {
  background(220);
  drawball(x,y,50,50);
  drawball(20,100,30,50);

}

function drawball(_x,_y,w,h) {
  ellipse(_x, _y, w, h);
 
  x = x + vx;
  y = y + vy;

  if(y<= 0 || y > 400){
    vy = vy * -1;
  }
  if(x <= 0 || x > 500){
    vx = vx * -1;
  }
}