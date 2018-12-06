let b;
var value = 0;
let testRight;
let testLeft;
let testUp;
let testDown;
var ref;
var standing, walking;
var timer;
var timer1;
var timerrunning=false;
var door;

function preload() {
  standing = loadAnimation('assets/ref0001.png');
  walking = loadAnimation('assets/ref0001.png','assets/ref0009.png');
  door = loadImage('assets/door.png');
}

function setup() {
  b = new Player(960, 540);
  createCanvas(1920, 1080);
  imageMode (CENTER);

}


function draw(){
  text()
	background(220);
  fill(0,0,0);
  rect(0,1070,1920,50);
  rect(0,-40,1920,50);
  rect(1910,0,50,1080);
  rect(-40,0,50,1080);
    b.drawPlayer();
    b.movePlayer();
    b.detectWall();
    imageMode(CENTER);
  scale(1/5);
  image(door,4800,500);

    // if(timerrunning==true){
    //   timerdisplay();
    // }
}

// function timerdisplay(){
//   fill(0);
//   text(frameCount,200,200);
//   print((frameCount-timer1)/frameRate);
// }

class Player {

	constructor(x,y){
		    this.x = x;
    		this.y = y;
	}
	drawPlayer(){
    ref = createSprite('assets/ref0001.png',this.x,this.y);
    animation(standing,this.x,this.y);
}

movePlayer(){
  if (keyIsDown(LEFT_ARROW) && testLeft[0]>=200) {
    this.x = this.x-2.5;
    animation(walking, this.x, this.y);
    print("left");
  } else if (keyIsDown(RIGHT_ARROW) && testRight[0]>=200) {
    print("right");
    this.x = this.x+2.5;
    animation(walking, this.x, this.y);
  }
  if (keyIsDown(UP_ARROW) && testUp[0]>=200) {
    this.y = this.y-2.5;
    print("up");
    animation(walking, this.x, this.y);
  } else if (keyIsDown(DOWN_ARROW) && testDown[0]>=200) {
    print("down");
    this.y = this.y+2.5;
    animation(walking, this.x, this.y);
  }
}

 detectWall(){

   testRight = get(this.x+82.5,this.y);
   //print(testRight);
   testLeft = get(this.x-85, this.y);
   //print(testLeft);
   testDown = get(this.x, this.y+51);
   //print(testDown);
   testUp = get(this.x, this.y-50);
   //print(testUp);
  }
}
// function keyPressed(){
//   if (keyIsDown(32)){
//     timer1=frameCount;
//     timerrunning=true;
//   }
// }
