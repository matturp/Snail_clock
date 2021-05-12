var xoff1 = 0;
var xoff2 = 10000;
var xoff3 = 500;
var xoff4 = 10;
var xoff5 = 50;
var xoff6 = 9586421058;


var ball = {

  x : 500,
  y : 500,

  
  display: function(){
    var r = map(noise(xoff1), 0, 1, 5, 100);
    var col = map(noise(xoff2), 0, 1, 5, 255);
    var xcol = map(mouseX,0,width,0,255);
    var ycol = map(mouseY,0,height,0,255);
    timeS = map(second(),0,59,0,0.01);
    timeM = map(minute(),0,59,0,0.005);
    timeH = map(hour(),0,24,0,0.002);

    xoff1 += timeS;
    xoff2 += timeS;
    xoff3 += timeM;
    xoff4 += timeM;
    xoff5 += timeH;
    xoff6 += timeH;

    stroke(0,50);
    //noStroke();
    fill(xcol,col,ycol);
    ellipse(this.x,this.y,20,20);
    ellipse(this.a,this.b,40,40);
    ellipse(this.c,this.d,60,60);
  },

  move: function(){

    var moveX = map(noise(xoff1), 0, 1, 0, width);
    var moveY = map(noise(xoff2), 0, 1, 0, height);
    var moveA = map(noise(xoff3), 0, 1, 0, width);
    var moveB = map(noise(xoff4), 0, 1, 0, height);
    var moveC = map(noise(xoff5), 0, 1, 0, width);
    var moveD = map(noise(xoff6), 0, 1, 0, height);


    this.x = moveX;
    this.y = moveY;
    this.a = moveA;
    this.b = moveB;
    this.c = moveC;
    this.d = moveD;
  }

};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  //var xcol = map(mouseX,0,width,0,200);
  background(0,1);
ball.move();
ball.display();

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
