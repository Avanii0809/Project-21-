var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  console.log(speed);

  weight = random(30, 52);

  bullet = createSprite(50, 200, 100, 10);
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);

  thickness = random(22, 83);
}

function draw() {
  background(255,255,255); 

  bullet.shapeColor = ("white");

  wall.shapeColor = color(80,80,80);

  damage();

  drawSprites();
}

function hasCollided(object1, object2){
  bulletRightEdge = object1.x+object1.width;

  wallLeftEdge = object2.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true
  }

  return false;
}

function damage(){
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    var damage = 0.5* weight* speed* speed/ thickness* thickness* thickness;

    if(damage>10){
      wall.shapeColor = ("red");
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
}
