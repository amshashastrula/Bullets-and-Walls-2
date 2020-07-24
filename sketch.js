var thickness, wall;
var bullets, speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52); 
  thickness = random(22,83);

  bullets = createSprite(50, 200, 40, 50);
  
  bullets.velocityX = speed;
  wall = createSprite(500, 200, thickness,height/2); 

  bullets.shapeColor = "black";
 
  wall.shapeColor = "brown";    
}

function draw() {
  background("white");  
  drawSprites();

  if(hasCollided(bullets,wall))
  {
    bullets.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
      if(damage>10)
       { 
          wall.shapeColor = "green";
          text("damage is:"+damage, 200,200);
        }  

        if(damage <10)
        {
          wall.shapeColor = "red";
          text("damage is:"+damage, 200,200);
        } 
   }
  
  

}

function hasCollided(o1,o2)
{
  bulletRightEdge = o1.x+o1.width;
  wallLeftEdge = o2.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}