var a,b


function setup() {
  createCanvas(800,400);
 a= createSprite(400, 200, 50, 50);
 b= createSprite(100, 200, 50, 50);
}

function draw() {
  background(255,0,0);
  
  a.shapeColor="black";
  b.shapeColor="white";

  b.x=mouseX;
  b.y=mouseY;


  if(b.y - a.y < a.height/2 + b.height/2 && a.y - b.y < a.height/2 + b.height/2 &&
     b.x - a.x < a.width/2 + b.width/2 && a.x - b.x < a.width/2 + b.width/2){

    a.shapeColor="blue";
    b.shapeColor="blue";
  }
  else{

    a.shapeColor="black";
    b.shapeColor="white";

  }

  drawSprites();
}