var superman,Superman;
var sky;
var asteroid,Asteroid;
var asteroidGroup;
var Score = 0;
var gameState = 0;
var SPD;
var abc;

function preload(){
superman = loadImage("superman.png");
sky = loadImage("sky.jpeg");
asteroid = loadImage("asteroid.png");
SPD =loadImage("Spd.png");
}

function setup() {
  createCanvas(1500, 705);

  Superman = createSprite(150,353,50,50);
  Superman.addImage(superman);
  Superman.scale=0.20;

asteroidGroup = createGroup();

}

function draw() {
  background(sky);
  

  

 if(gameState === 0){
 fill("black");
 stroke("black");
 textSize(40);
 text("Help Superman to avoid Asteroid !",550,400);
 text("Use the Arrow keys to control him",550,300);
 text("Press the Space key to start playing !",550,200);
 if(keyCode === 32){
   gameState = 1;
 }
}

if(gameState === 1){
  Asteroid1();

  if (keyIsDown(UP_ARROW)) {
    Superman.y = Superman.y -25; 
  }
    
  if (keyIsDown(DOWN_ARROW)) {
    Superman.y = Superman.y +25; 
  }

  fill("black");
  textSize(30);
  text("Score: " + Math.round(Score), 10, 30)
  Score = frameCount / 15;

  if(Superman.isTouching(asteroidGroup)){
    gameState = 2;
    asteroidGroup.destroyEach();
  }
}

if(gameState === 2){
  var abc =createSprite(750,430,1500,705);
 abc.addImage(SPD);
 fill("white");
 stroke("white");
 textSize(30);
 text("You failed !",900,200);
 background("black");
}

  drawSprites();
}
function Asteroid1(){
  if(frameCount % 30 === 0){
    var Asteroid=createSprite(1400,600,50,50);
    Asteroid.y = Math.round(random(10,690));
    Asteroid.addImage(asteroid);
    Asteroid.scale=0.3;
    Asteroid.velocityX =-20;
    Asteroid.lifetime = 800;
    asteroidGroup.add(Asteroid);
  }
}
