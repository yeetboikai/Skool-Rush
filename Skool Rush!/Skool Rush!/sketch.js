let b;
var value = 0;
let testRight;
let testLeft;
let testUp;
let testDown;
var ref;
var standingfb, walkingfb;
var map;
let movement = "standingfb";
var standingsd, walkingsd;
let timer;
let timing=false
var SCENE_W = 3840;
var SCENE_H = 2160;

function preload() {
  standingfb = loadAnimation('assets/ref0001.png');
  walkingfb = loadAnimation('assets/ref0001.png','assets/ref0009.png');
  walkingsd = loadAnimation('assets/ref0010.png','assets/ref0018.png');
  standingsd = loadAnimation('assets/ref0010.png');
  map = loadImage('assets/map.png');

}

function setup() {
  ref = createSprite(100,100,this.x,this.y);
  frameRate(80);
  b = new Player(960, 540);
  createCanvas(1920, 1080);
  ref.addAnimation('walkingsd','assets/ref0010.png','assets/ref0018.png');
  ref.addAnimation('standingsd','assets/ref0010.png');
  ref.addAnimation('walkingfb','assets/ref0001.png','assets/ref0009.png');
  ref.addAnimation('standingfb','assets/ref0001.png');


}


function draw(){
  background(128,128,128);
  image(map,0,0);
  fill(255,0,0);
  textSize(96);
  text(30-(frameCount-timer)/20,camera.position.x-100,camera.position.y-400);
    b.drawPlayer();
    b.movePlayer();
    b.detectWall();
}

function keyPressed(){
  if (keyIsDown(37)&&timing==false||keyIsDown(38)&&timing==false||keyIsDown(39)&&timing==false||keyIsDown(40)&&timing==false){
    timer=frameCount;
    timing=true
  }
}

class Player {

	constructor(x,y){
		    this.x = x;
    		this.y = y;
	}
	drawPlayer(){
    print(movement);
    if (movement == "standingfb"){
      animation(standingfb,this.x,this.y);
    }
    if (movement == "backward"){
      animation(walkingfb, this.x, this.y);
    }
    if (movement=="forward"){
      animation(walkingfb, this.x, this.y);
    }
    if(movement == "right"){
      animation(walkingsd, this.x, this.y);
    }
    if (movement == "left"){
      animation(walkingsd, this.x, this.y);
    }
    if (movement == "standingsd"){
      animation(standingsd, this.x, this.y);
    }

    ref.velocity.x = (camera.mouseX-this.x)/20;
    ref.velocity.y = (camera.mouseY-this.y)/20;

    if(mouseIsPressed)
      camera.zoom = 0.5;
    else
      camera.zoom = 4;

    camera.position.x = this.x;
    camera.position.y = this.y;

    if(this.x < 0)
      this.x = 0;
    if(this.y < 0)
      this.y = 0;
    if(this.x > SCENE_W)
      this.x = SCENE_W;
    if(this.y > SCENE_H)
      this.y = SCENE_H;

    drawSprite(ref);

    camera.off();


}

movePlayer(){
  if (keyIsDown(LEFT_ARROW) && testLeft[0]>=200) {
    this.x = this.x-10;
    movement = "left";
  } else if (keyIsDown(RIGHT_ARROW) && testRight[0]>=200) {
    this.x = this.x+10;
    movement = "right";
  }else{
    movement = "standingfb";
  }

  if (keyIsDown(UP_ARROW) && testUp[0]>=200) {
    this.y = this.y-10;
    movement = "forward";
  }else if (keyIsDown(DOWN_ARROW) && testDown[0]>=200) {
    this.y = this.y+10;
    movement = "backward";
  }
}

 detectWall(){

   testRight = get(this.x+82.5,this.y);
   print(testRight);
   testLeft = get(this.x-90, this.y);
   print(testLeft);
   testDown = get(this.x, this.y+51);
   print(testDown);
   testUp = get(this.x, this.y-50);
   print(testUp);
  }
}
