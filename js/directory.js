// Canvas Stuff
var canvas;
var canvasContext;

// SOUNDS To play: e.x honking.play();
var honking = new Audio("./sounds/honking.mp3");
var policeSiren = new Audio("./sounds/policeSiren.mp3");
var splat = new Audio("./sounds/splatNoise.mp3");
var crash = new Audio("./sounds/carCrash.mp3");
var siren = new Audio("./sounds/siren2.mp3");
var godDamn = new Audio("./sounds/noopnoop.mp3");
var selectionSound = new Audio("./sounds/selection.mp3");


honking.volume = 0.3;
policeSiren.volume = 0.3;
splat.volume = 0.5;
crash.volume = 0.3;
siren.volume = 0.3;
godDamn.volume = 1;

// All sounds in the intro (honking, crash, policeSiren);
function introSounds(){
  var twoHonks = setInterval(function(){
    honking.play();
  },0);
  setTimeout(setTimeout(function(){
    splat.play();
    // Cars Honking for 6 seconds
  clearInterval( twoHonks )
}, 6000));
    // Police Sirens begin at 7 seconds
  setTimeout(setTimeout(function(){
      policeSiren.play();
    }, 7000));
}

// STOP
var stop = 0;


// Move Intro and Draw Intro
function callBothIntro() {

  moveIntro();
  drawIntro();
}

var introTime = 13000;
var gameWaitTime = 16000;

// Draw Game
var callGame = function(){
  setTimeout(function (){
    drawGame();
  }, gameWaitTime);
}

// Allows game to stop when switched to 1
var switcher = 0;





// When crash occurs
function endGame(){
//   new Image(copPicLoaded, copPic, copX, copY);
//   copX  = -150;
//   copY = 220;
//   if(copX < 200){
//   copSpeedX = 4;
// }
// function moveCop(){setInterval(function(){
//   copX = copX + copSpeedX;
// }, 1000/framesPerSecond);
// }
// moveCop();
  trafficSpeedX = stop;
  backgroundSpeed = stop;
  crash.play();
  clearInterval(speedUp);
  clearInterval(pointsUp);
  laneSwitch = stop;
  pointRaiser = stop;
  speedRaiser = stop;
  switcher = 1;
  delayedBlackScreen();
  if(points > 0){
    document.querySelector('#HighScore').innerHTML = Math.ceil(points);
  }
}

// For end game, turn to black after 4 seconds, show noop noop and play again button
function delayedBlackScreen(){setTimeout(function(){
  colorRect(0,0,canvas.width,canvas.height, 'black');
  // Putting text on score screen
  document.querySelector('#directions').innerHTML = ' YOU LOST! Press play again to start over!';
  canvasContext.font = 'bold 10pt Calibri';
  canvasContext.fillText('New High Score!  ' + Math.ceil(points) + ' Points!', 150, 100);
  canvasContext.font = 'italic 40pt Times Roman';
  canvasContext.fillStyle = 'white';
  canvasContext.fillText('New High Score!  ' + Math.ceil(points) + ' Points!', 100, 150);
  canvasContext.font = '40pt Calibri';
  canvasContext.lineWidth = 1;
  canvasContext.strokeStyle = 'white';
  godDamn.play();
  document.querySelector('img').setAttribute('style','display: block');
  setTimeout(function(){
    document.querySelector('img').src = "./Images/playAgain.png";
    document.querySelector('img').addEventListener('click', function (e) {
      // This doesn't allow for saving high score. But is better than nothing for now
      window.location.reload();

    });
  }, 2000);
}, 3500);
}


// This will allow for the game to move smoothly at 30 fps
var framesPerSecond = 30;

// SPEED VARIABLES
var backgroundSpeed = -10;
var trafficSpeedX = -5;
var speedRaiser = 1;


// Tree Variables
var treeX = 100;
var treesX = [0, 100, 200, 300, 400, 500, 600, 700, 800];
var randomTrees = [0, 1, 0, 1, 1, 2, 0, 1, 0]; // This matches top array to make trees random
var trees = [treePic, treePic1, treePic2];
function treePusher(){
  // Take out that tree
  treesX.splice(treesX[0],1);
  // Push in another tree at 800
  treesX.push(treesX[7] + 100);
  // Generate random # that will be used to randomize tree type
  var randomTreeNumber = Math.floor(Math.random()*trees.length);
  randomTrees.splice(0,1);
  // Push random number into array.
  randomTrees.push(randomTreeNumber)
}

// Traffic Variables


var trafficLane1 = [500];
var randomCar = [0];
var lane1Y = 140;


var trafficLane2 = [800];
var randomCar2 = [0];
var lane2Y = 220;

var trafficLane3 = [400];
var randomCar3 = [0];
var lane3Y = 300;


var trafficCarXAdjustment = 120;



var cars = [trafficCarPic, trafficCarPic1, trafficCarPic2, trafficCarPic3, trafficCarPic4, trafficCarPic5, trafficCarPic6];

var carSpaceMultiple = 200;
// Lane Variables
var lanesX = [];
for(var i = 0; i <= 800; i+=100){
  lanesX.push(i);
}

// Crosswalk array regeneration
var crossX = [420];
var crossWalkDistance = 1600;


// function speedUp(){
//   backgroundSpeed --;
//   trafficSpeedX --;
// }

function speedUp (){ setInterval(function(){
  backgroundSpeed -= speedRaiser;
  trafficSpeedX -= speedRaiser;
}, 10000);
};

// Main Car Variables
var carX = -3250; //Starts way left in intro
var carY = 310;
var carSpeedX = 20;
var splatterDistance = 140;

var points = 0;
var endScore = 0;
var initialHighScore = 0;
var highScore = 0;
document.querySelector('#HighScore').innerHTML = initialHighScore;

var pointRaiser = 1;

var laneSwitch = 80;


function pointsUp(){
  setInterval(function(){
  points+= pointRaiser;
}, 3000);
}

//Grandma Variables
var grandmaX = 490;
var grandmaY = 100;
var grandmaSpeedY = 1;
var grandmaSpeedX;
var grandmaAdjustment = 27; // This adjustment allows grandma to get hit

// Grandma array regeneration
var grandmaArrayX = [crossX[0]+30];
var grandmaArrayY = [220];
var grandmaDistance = crossWalkDistance;

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
    copSpeedX = stop;
    copSpeedY = stop;
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
function Image(pictureLoaded, picture, leftX, topY,width,length){
  if(pictureLoaded && width && length){
    canvasContext.drawImage(picture,leftX,topY,width,length);
  }
  else if(pictureLoaded){
    canvasContext.drawImage(picture,leftX,topY);
  }

};
