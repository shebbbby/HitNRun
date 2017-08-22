// Canvas Stuff
var canvas;
var canvasContext;

// Move Intro and Draw Intro
function callBoth() {
  moveIntro();
  drawIntro();
}

function callBothGame(){
  setTimeout(function (){

    drawGame();
    moveGame();


  }, 16000);
}

// This will allow for the game to move smoothly at 30 fps
var framesPerSecond = 30;

// This represents the intro as a movie
// var intro = setInterval(callBoth, 1000/framesPerSecond);

// Stop Variables.
var stopX = 0;
var stopY = 0;

// Tree Variables
var treeX = 100;
var treeSpeedX = -2;
var treesX = [];

// Lane Variables
var laneSpeedX = -2;
var lanesX = [];


// Traffic Variables
var trafficSpeedX = -5;
var trafficLane1 = [];
var trafficLane2 = [];
var trafficLane3 = [];

// Main Car Variables
var carX = -3250; //Starts way left in intro
var carY = 310;
var carSpeedX = 20;
var splatterDistance = 140;

//Grandma Variables
var grandmaX = 490;
var grandmaY = 100;
var grandmaSpeedY = 1;
var grandmaSpeedX;
var grandmaAdjustment = 27; // This adjustment allows grandma to get hit

//Cop Variables
var copSpeedX = 4.50;
var copSpeedY = 2.05;
var copX = 20;
var copY = 430;
var copPullOverDist = 150;
var sirenSpeed = 500;
var pursueDriver = function(){
  copX = copX + copSpeedX;
  copY = copY - copSpeedY;
  // Cop stops right behind Car
  if(copX > carX - copPullOverDist){
    copSpeedX = 0;
    copSpeedY = 0;
  }
}
var copColor = '#00c3fe';
// Change cop color (Make it happen at right time)
setInterval(function (){
  if(copColor === '#0000fe'){
    copColor = '#00c3fe';
    }
  else{
    copColor = '#0000fe'
  }
}, sirenSpeed);

// Draws rectangles (Road, Grass, Traffic Lines)
function colorRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

// Image Constructor (Cars, People, Trees)
function Image(pictureLoaded, picture, leftX, topY){
if(pictureLoaded){
canvasContext.drawImage(picture,
leftX, topY);
}
};
