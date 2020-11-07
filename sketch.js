var wall;
var bullet;
var speed;
var weight;
var thinckness;

function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = (80, 80, 80);

  bullet.velocityX = speed;
}

function draw() {
  background(0); 

  text("Bullet Speed: "+speed, 100, 300);
  text("Bullet Weight: "+weight, 100, 325);
  text("Wall Thickness: "+thickness, 100, 350);
if(hasCollided(wall, bullet)==true){
  bullet.velocityX = 0;
  var damage = (0.5*speed*speed*weight)/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor = "red"
    fill("red");
    text("NOT SAFE", 400, 300);
  }else{wall.shapeColor = "green"
  fill("green");
  text("SAFE", 400, 300);}
}

   
  
  
  drawSprites();
}

function hasCollided(object1, object2){
  if(bullet.x+bullet.width/2 >= wall.x-wall.width/2){
    return true;
  }else{return false;}

    
  }

    function touching(object1, object2){
      if(object1.x-object2.x<object1.width/2+object2.width/2&&
        object2.x-object1.x<object1.width/2+object2.width/2
        &&object1.y-object2.y<object1.height/2+object2.height/2&&
        object2.y-object1.y<object1.height/2+object2.height/2){
          return true;
    
        }else {return false;}
        }

