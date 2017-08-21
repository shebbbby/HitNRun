
// IMAGES
var carPic = document.createElement("img");
var carPicLoaded = false;
carPic.onload = function(){
  carPicLoaded = true;
}
carPic.src = "file:///Users/Shebby/Downloads/imageedit_2_9765637766.png"

var grandmaPic = document.createElement("img");
var grandmaPicLoaded = false;
grandmaPic.onload = function(){
  grandmaPicLoaded = true;
}
grandmaPic.src = "file:///Users/Shebby/Downloads/grandmaa.png"

var trafficCarPic = document.createElement("img");
var trafficCarPicLoaded= false;
trafficCarPic.onload = function(){
  trafficCarPicLoaded = true;
};
trafficCarPic.src = "file:///Users/Shebby/Downloads/purplee.png"

var trafficCarPic1 = document.createElement("img");
var trafficCarPicLoaded1 = false;
trafficCarPic1.onload = function(){
trafficCarPicLoaded1 = true;
};
trafficCarPic1.src = "file:///Users/Shebby/Downloads/imageedit_2_3473376709.png"

var copPic = document.createElement("img");
var copPicLoaded= false;
copPic.onload = function(){
copPicLoaded = true;
};
copPic.src = "file:///Users/Shebby/Downloads/copp.png"

var treePic = document.createElement("img");
var treePicLoaded = false;
treePic.onload = function(){
treePicLoaded = true;
};
treePic.src = "file:///Users/Shebby/Downloads/imageedit_2_8385205648.png"

var treePic1 = document.createElement("img");
var treePicLoaded1 = false;
treePic1.onload = function(){
treePicLoaded1 = true;
};
treePic1.src = "file:///Users/Shebby/Downloads/imageedit_6_6843079850.png"

var treePic2 = document.createElement("img");
var treePicLoaded2 = false;
treePic2.onload = function(){
treePicLoaded2 = true;
};
treePic2.src = "file:///Users/Shebby/Downloads/imageedit_10_6917557038.png"
var treeX = 100;

// Canvas Stuff
var canvas;
var canvasContext;

// This will allow for the game to move smoothly at 30 fps
var framesPerSecond = 30;

// This represents the intro as a movie
var intro = setInterval(callBoth, 1000/framesPerSecond);

// Main Car Variables
//Starts way left
var carX = -3250;
var carY = 310;
var carSpeedX = 20;

//Grandma Variables
var grandmaX = 490;
var grandmaY = 100;
var grandmaSpeedY = 1;
var grandmaSpeedX;

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

//draws rectangles
function colorRect(leftX, topY, width, height, drawColor){
  canvasContext.fillStyle = drawColor;
  canvasContext.fillRect(leftX, topY, width, height);
}

// Image Constructor.
function Image(pictureLoaded, picture, leftX, topY){
if(pictureLoaded){
canvasContext.drawImage(picture,
leftX, topY);
}
};

// Only after window loads, this function executes
window.onload = function() {
  // Select "gameCanvas" from html element
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  // Play Intro for 13 seconds and then cut to black and start game
  setTimeout(function( ) { clearInterval( intro ); }, 13000);
  setTimeout(function(){
    colorRect(0,0,canvas.width,canvas.height, 'black');
  },15000);
  // Draw Game after intro (16 seconds)
  setTimeout(drawGame,16000);
}
// Move Everything and Draw Everything
function callBoth() {
  moveEverything();
  drawIntro();
}


// This is an intro scene. Game begins after this.
function drawIntro() {
  // black screen
  colorRect(0,0,canvas.width,canvas.height, 'black');
  // Top Grass
  colorRect(0,0,canvas.width,100, '#94c840');
  //Bottom Grass
  colorRect(0,410,canvas.width,190, '#94c840');
  //Traffic lines
  for (var i = 15; i < canvas.width; i+=15){
    for (var y = 130; y <= 370; y+=80)
    colorRect(i, y, 10,5, 'white');
}
  //Gradmas Crosswalk
  for (var i = 105; i < 420; i+=55){
  colorRect(470, i, 80,20, 'white');
}

// MAIN CAR
new Image(carPicLoaded, carPic, carX, carY);
// GRANDMA
new Image(grandmaPicLoaded, grandmaPic, grandmaX, grandmaY);
// COP CAR
colorRect(copX + 15, copY +20, 50,30, copColor);
new Image(copPicLoaded, copPic, copX, copY);

  // Cars waiting in traffic (Make this more efficient, shouldnt need trafficCar1)

new Image(trafficCarPicLoaded, trafficCarPic, 310, 220);
new Image(trafficCarPicLoaded, trafficCarPic, 180, 150);
new Image(trafficCarPicLoaded1, trafficCarPic1, 50, 220);
new Image(trafficCarPicLoaded, trafficCarPic, 50, 150);
new Image(trafficCarPicLoaded1, trafficCarPic1, 310, 150);
new Image(trafficCarPicLoaded, trafficCarPic, 180, 220);

  //TREES
  // (Make more efficient)
  // (Make tree Constructor)

new Image(treePicLoaded, treePic, treeX -90, 10);
new Image(treePicLoaded1, treePic1, treeX, 10);
new Image(treePicLoaded, treePic, treeX * 2, 10);
new Image(treePicLoaded2, treePic2, treeX * 3, 10);
new Image(treePicLoaded, treePic, treeX * 4, 10);
new Image(treePicLoaded1, treePic2, treeX * 5, 10);
new Image(treePicLoaded, treePic, treeX * 6, 10);
new Image(treePicLoaded1, treePic1, treeX * 7, 10);
new Image(treePicLoaded, treePic, treeX * 2, 430);
new Image(treePicLoaded2, treePic2, treeX * 3, 430);
new Image(treePicLoaded, treePic, treeX * 4, 430);
new Image(treePicLoaded1, treePic1, treeX * 5, 430);
new Image(treePicLoaded, treePic, treeX * 6, 430);
new Image(treePicLoaded2, treePic2, treeX * 7, 430);

};

function moveEverything() {
  // Move car horizontally
  carX = carX + carSpeedX;
  grandmaY = grandmaY + grandmaSpeedY;

    if(carY < grandmaY + 27){
          //Main Car hits grandma and stops
          carSpeedX = 0;

          //grandma gets hit, splattered
          grandmaPic.src = "file:///Users/Shebby/Downloads/imageedit_2_3030481107.png"

          // Find way to store carX value without having to reference it,
          // so that blood could stay there.
          grandmaX = carX + 140;
          grandmaY = carY;
          grandmaSpeedX = 0;
          grandmaSpeedY = 0;

          // Cop pursues Main Car
          setTimeout(function() {
            pursueDriver();
          }, 2000);

        //Driver waits until five seconds after he hits grandma to drive away
          if(copY > carY - 70){
            setTimeout(function (){
                carSpeedX = 35;
              }, 5000);
        }
        // Cop Drives after Driver
        if(copY > carY - 70){
          setTimeout(function (){
              copSpeedX = 35;
            }, 6000);
      }
    }
  };

function drawGame() {
  // black screen
  colorRect(0,0,canvas.width,canvas.height, 'black');
  // Top Grass
  colorRect(0,0,canvas.width,100, '#94c840');
  //Bottom Grass
  colorRect(0,410,canvas.width,190, '#94c840');
  //Traffic lines
  for (var i = 15; i < canvas.width; i+=15){
    for (var y = 130; y <= 370; y+=80)
    colorRect(i, y, 10,5, 'white');
}
  // MAIN CAR
  carX = 200; carY = 230;
  new Image(carPicLoaded, carPic, carX, carY);

  //TREES
  new Image(treePicLoaded, treePic, treeX -90, 10);
  new Image(treePicLoaded1, treePic1, treeX, 10);
  new Image(treePicLoaded, treePic, treeX * 2, 10);
  new Image(treePicLoaded2, treePic2, treeX * 3, 10);
  new Image(treePicLoaded, treePic, treeX * 4, 10);
  new Image(treePicLoaded1, treePic2, treeX * 5, 10);
  new Image(treePicLoaded, treePic, treeX * 6, 10);
  new Image(treePicLoaded1, treePic1, treeX * 7, 10);
  new Image(treePicLoaded, treePic, treeX - 90, 430);
  new Image(treePicLoaded, treePic, treeX, 430);
  new Image(treePicLoaded, treePic, treeX * 2, 430);
  new Image(treePicLoaded2, treePic2, treeX * 3, 430);
  new Image(treePicLoaded, treePic, treeX * 4, 430);
  new Image(treePicLoaded1, treePic1, treeX * 5, 430);
  new Image(treePicLoaded, treePic, treeX * 6, 430);
  new Image(treePicLoaded2, treePic2, treeX * 7, 430);
};
