var garden,rabbit,orangeleaf,apple,leaf
var gardenImg,rabbitImg,leafImg,appleImg,orangeleafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg=loadImage("leaf.png")
  appleImg=loadImage("apple.png")
  orangeleafImg=loadImage("orangeLeaf.png")


}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x=World.mouseX


  











  edges= createEdgeSprites();
  rabbit.collide(edges);
 drawSprites();

 var select_sprites=Math.round(random(1,2))

 if (frameCount % 80 === 0) {
   if(select_sprites==1){
  createApples()
 
   }
 
 else if (select_sprites==2) {
 
  createleaves()
 
 }
 else{

  createorangeleaves()
 }
 
 }
 
 }

 



function createApples(){
apple = createSprite( random(50,350),40,10,10           )
apple.addImage(appleImg)
apple.velocityY=2
apple.scale=0.08
apple.lifetime=150

}
function createleaves(){
leaf = createSprite(random(50,350),40,10,10)
leaf.addImage(leafImg)
leaf.velocityY=2
leaf.scale=0.08

leaf.lifetime=150


}


function  createorangeleaves(){
orangeleaf = createSprite(random(50,350),40,10,10)

  orangeleaf.addImage(orangeleafImg)
  orangeleaf.velocityY=2
  orangeleaf.scale=0.08
  orangeleaf.lifetime=150


}









