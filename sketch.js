var ball ={
  x:20,y:50,r:40,Xspeed:0,yspeed:0,
  color: "blue"
}



function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r,)
  fill(ball.color)
  ball.Xspeed =2
  ball.x += ball.Xspeed

}