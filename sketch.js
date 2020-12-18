  var wall, thickness;
//created a variable for wall and thickness

  var bullet, speed, weight;
//created a variable for bullet, speed and weight


function setup() {
  createCanvas(1600,400);//created the canvas
    
    speed=random(223,321);
    weight=random(30,52);
    thickness=random(22,83);
  //assigned random values to speed, weight and thickness
    
    bullet =createSprite(50,200,50,10);
  //created the sprite for bullet
  
    wall=createSprite(1200,200,thickness,height/2);
    wall.shapeColor=color(80,80,80);
  //created the sprite for wall and assigned a color to it
  }

  
  function draw() {
    background(255,255,255);//background
      
      bullet.velocityX=speed;
    //Assigned the velocityX property of the bullet sprite to the speed variable


    if(wall.x-bullet.x<(bullet.width+wall.width)/2){
      bullet.velocityX=0;
    //assigned velocity of the bullet to zero 
      
      var deformation =0.5*weight*speed*speed/22509;
    //created the variable deformation
      
    if (deformation>180){
      bullet.shapeColor=color(255,0,0);
      }
      
    if (deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
      }
      
    if(deformation<100){
      bullet.shapeColor=color(0,255,0); 
      }
    //to change the color of the bullet according to the magnitude of deformation
    }

    if(hasCollided(bullet,wall)){
      bullet.velocityX=0;
    //assigned velocity zero to the bullet
        
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    //created the variable damage
        
    if (damage>10){
        wall.shapeColor=color(255,0,0);
      }
        
    if (damage<10){
        wall.shapeColor=color(0,255,0);
      }//to change the color of the wall according to the magnitude of damage
      }
drawSprites();
}

function  hasCollided(bullet1, wall1){
      bulletRightEdge=bullet1.x +bullet1.width;
      wallLeftEdge=wall1.x;
  if (bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }//created function for has collided