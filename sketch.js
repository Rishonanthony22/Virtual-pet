var dog,happyDog,database,foodS,foodStock
function preload()
{
  dog=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,50,30);
  dog.addImage(dog);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background("46, 139, 87");
  drawSprites();
 
  if(keyWentDown(UP_ARROW)){
   Food.value-1;
   writeStock(foodS)
   dog.addImage(happyDog);
  }
text("database.Food",250,240)
}




