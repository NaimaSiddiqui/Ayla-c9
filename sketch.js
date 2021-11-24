var box;


function setup() {
  createCanvas(800, 800);
  box= createSprite(400,400,30,30);
}

function draw() {
  background("pink");

  if(keyIsDown(RIGHT_ARROW)){
box.position.x=box.position.x+5;
  }

  if(keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5;
  }

  drawSprites();
}