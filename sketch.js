var game,allPlayers,pLAYER1,pLAYER2,pLAYER3,pLAYER4,pLAYERS;
var database,playerCount,form,player,bkg,knife1,car1,car2,carImg;
var gameState=0;
var playerAnimation

function preload(){
  bkg=loadImage("images/background.png")
  playerAnimation=loadAnimation("playerImages/knife1.png","playerImages/knife2.png","playerImages/knife3.png","playerImages/knife4.png","playerImages/knife5.png","playerImages/knife6.png","playerImages/knife7.png","playerImages/knife8.png","playerImages/knife9.png","playerImages/knife10.png","playerImages/knife11.png","playerImages/knife12.png","playerImages/knife13.png","playerImages/knife14.png","playerImages/knife15.png")
  car1_img=loadImage("playerImages/knife1.png")
  carImg=loadImage("images/car.png");
}


function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
