//create a variable to hold one ball
let b;
var value = 0;
let testRight;
let testLeft;
let testUp;
let testDown;
// var monkey1, door, monkey2;

// function preload(){
//   monkey1 = loadImage('assets/monkey1.png');
//   door = loadImage('assets/door.png');
//   monkey2 = loadImage('assets/monkey2.png');
// }

function setup() {
  createCanvas(800, 400);
  b = new Ball(400, 200); //make a new ball from the Ball class and call it b.
  // imageMode (CENTER);

}


function draw(){
	background(220);
  fill(0,0,0);
  rect(100,400,400,50);
  rect(800,400,50,50);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    b.detectWall();
    // scale(1/4);
    // image(door,200,300);

}



//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}
	drawBall(){  // draw a ball on the screen at x,y
        fill(255, 255, 153);
        noStroke();
    		ellipse(this.x,this.y,50,50);
	}


 moveBall(){ //update the location of the ball, so it moves across the screen
   if (keyIsDown(LEFT_ARROW) && testLeft[0]>=200) {
     this.x = this.x-2.5;
     print("left");
   } else if (keyIsDown(RIGHT_ARROW) && testRight[0]>=200) {
     print("right");
     this.x = this.x+2.5;
   }
   if (keyIsDown(UP_ARROW) && testUp[0]>=200) {
     this.y = this.y-2.5;
     print("up");
   } else if (keyIsDown(DOWN_ARROW) && testDown[0]>=200) {
     print("down");
     this.y = this.y+2.5;
   }
 }

 detectWall(){

   testRight = get(this.x+25,this.y);
   print(testRight);
   testLeft = get(this.x-25, this.y);
   print(testLeft);
   testDown = get(this.x, this.y+25);
   print(testDown);
   testUp = get(this.x, this.y-25);
   print(testUp);
  }
}
