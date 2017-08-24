// Only after window loads will this function executes
window.onload = function() {
  // Select "gameCanvas" from html element
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  // var options = setInterval(drawOptionMenu, 1000/framesPerSecond);

// After selecting car, play intro (Just added)
// document.addEventListener('click',optionsMenu,false);
// function optionsMenu(e){
//   var intro = setInterval(callBoth, 1000/framesPerSecond);
//   setTimeout(function( ) { clearInterval( intro ); }, 13000);
//   clearInterval( options );
// }

//WHAT YOU HAD BEFORE
  // var options = setInterval(drawOptionMenu, 1000/framesPerSecond);
  var intro = setInterval(callBoth, 1000/framesPerSecond);
  setTimeout(function( ) { clearInterval( intro ); }, 13000);


  // KEY DOWN
  document.addEventListener('keydown',keyDownListener,false);
  function keyDownListener(e){
    switch (e.keyCode){
      case 37:
      if(carY > 150){
      carY = carY - 80;
      // carPic.src = "file:///Users/Shebby/Downloads/imageedit_18_3872202865.png"
      }
      if(carY < 150){
        carY = carY - 0;
      }
      break;
      case 39:
      if(carY < 290){
      carY = carY + 80;
      // 80 for lane switching
      // carPic.src = "file:///Users/Shebby/Downloads/rightCar.png"
      }
      if(carY > 290){
        carY = carY + 0;
      }
      break;
    }
  }
  // Play Intro for 13 seconds and then cut to black and start game
  setTimeout(function(){
    colorRect(0,0,canvas.width,canvas.height, 'black');
    var randomPersonNumber = Math.floor(Math.random()*people.length);
    grandmaPic.src = people[randomPersonNumber];
    carX = 200; carY = 220;
  },15000);
  // Draw Game after intro (15 seconds)
  // setTimeout(callBothGame,16000);
  setInterval(callBothGame, 1000/framesPerSecond);

}

function drawOptionMenu() {
  // black screen
  colorRect(0,0,canvas.width,canvas.height, 'black');
  new Image(carPicLoaded, carPic, 50, 200);
  new Image(purpleCarPicLoaded, purpleMainCarPic, 250, 200);
  new Image(lightPurpleCarPicLoaded, lightPurpleMainCarPic, 450, 200);
  new Image(lightBlueCarPicLoaded, lightBlueCarPicLoaded, 650, 200);
  new Image(darkBlueCarPicLoaded, darkBlueMainCarPic, 50, 300);
  new Image(grayCarPicLoaded, grayMainCarPic, 250, 300);
  new Image(whiteMainCarPicLoaded, whiteMainCarPic, 450, 300);
}

// INTRO MOVIE SCENE

// This initially draws all images and rectangles
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

  // Cars waiting in traffic (Make this more efficient)
new Image(trafficCarPicLoaded, trafficCarPic, 310, 220);
new Image(trafficCarPicLoaded, trafficCarPic, 180, 150);
new Image(trafficCarPicLoaded1, trafficCarPic1, 50, 220);
new Image(trafficCarPicLoaded, trafficCarPic2, 50, 150);
new Image(trafficCarPicLoaded1, trafficCarPic1, 310, 150);
new Image(trafficCarPicLoaded, trafficCarPic2, 180, 220);
  //TREES
  // (Make more efficient)
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

// These are all the moving directions during intro movie
function moveIntro() {
  // Move car horizontally
  carX = carX + carSpeedX;
  grandmaY = grandmaY + grandmaSpeedY;
  // If carY is higher
    if(carY - grandmaAdjustment < grandmaY){
          //Main Car hits grandma and stops
          carSpeedX = stopX;
          //grandma gets hit, splattered "blood"
          grandmaPic.src = "./Images/blood.png"
          // Find way to store carX value without having to reference it, so that blood could stay there.
          grandmaX = 430 + splatterDistance; // NEED TO FIGURE OUT HOW TO USE carX and not 430
          grandmaY = carY;
          grandmaSpeedX = stopX;
          grandmaSpeedY = stopY;
          // This makes cop pursue driver after 2 seconds
          setTimeout(function() {
            pursueDriver();
          }, 2000);
        // This makes driver wait five seconds after he hits grandma to then drive away.
          if(copY > carY){
            setTimeout(function (){
                carSpeedX = 35;
              }, 5000);
        }
        // Cop Drives after Driver
        if(copY > carY){
          setTimeout(function (){
              copSpeedX = 35;
            }, 6000);
      }
    }
  };

// ACTUAL GAME!!!
// Draw Actual Game
function drawGame() {
  // black screen
  colorRect(0,0,canvas.width,canvas.height, 'black');
  // Top Grass
  colorRect(0,0,canvas.width,100, '#94c840');
  //Bottom Grass
  colorRect(0,410,canvas.width,190, '#94c840');
  //Traffic lines
  colorRect(0, 130, 800,5, 'yellow');
  colorRect(0, 370, 800,5, 'white');
  for (var i = 0; i < lanesX.length; i++){
   for (var y = 210; y <= 290; y+=80){
    colorRect(lanesX[i], y, 30,5, 'white');
}
    lanesX[i] = lanesX[i] + backgroundSpeed;
  }
  if(lanesX.includes(-50)){
    lanesX.splice(0,1);
    lanesX.push(800);
  }
// Push tree into treesX array every 100
for (var t = 0; t < treesX.length; t++){
  // randomTrees is an array of random index numbers
  new Image(treePicLoaded, trees[randomTrees[t]], treesX[t], 10);
  new Image(treePicLoaded, trees[randomTrees[t]], treesX[t], 430);
  // This makes trees move left
    treesX[t] = treesX[t] + backgroundSpeed;
}
// If any tree in array treesX includes -100
if(treesX.includes(-100)){
  // Take out that tree
  treesX.splice(treesX.indexOf(-100),1);
  // Push in another tree at 800
  treesX.push(800);
  // Generate random # that will be used to randomize tree type
  var randomTreeNumber = Math.floor(Math.random()*trees.length);
  randomTrees.splice(0,1);
  // Push random number into array.
  randomTrees.push(randomTreeNumber)
}

//CrossWalk with people
for (var i = 105; i < 420; i+=55){
colorRect(crossX[0], i, 80,20, 'white');
}
crossX[0] = crossX[0] + backgroundSpeed;
 // Middle of Crosswalk vertically
if(crossX.includes(-200)){
 crossX.splice(0,1);
 crossX.push(crossWalkDistance);
}

console.log(carY);

// Grandma in middle of crosswalk
grandmaX = grandmaArrayX[0];
grandmaArrayX[0] = grandmaArrayX[0] + backgroundSpeed;
grandmaY = grandmaY + grandmaSpeedY;
// var randomPersonPositionY =
var randomPersonLocation = Math.floor(Math.random()*3);
if(randomPersonLocation === 1){
  grandmaArrayY.push(140);
}
else if (randomPersonLocation === 2){
  grandmaArrayY.push(220);
}
else{
  grandmaArrayY.push(300);
}
grandmaY = grandmaArrayY[0];
  new Image(grandmaPicLoaded, grandmaPic, grandmaArrayX[0], grandmaArrayY[0]);

    if(carY <= grandmaY && carY + 60 >= grandmaY && carX+132 >= grandmaX && carX <= grandmaX){
          //grandma gets hit, splattered
          grandmaArrayX[0] = crossX[0]+ splatterDistance/2;
          grandmaPic.src = "./Images/blood.png"
          // console.log("splat");
        }

        if(grandmaArrayX.includes(-200)){
          grandmaArrayX.splice(0,1);
          grandmaArrayX.push(crossX[0] + 30);
          var randomPersonNumber = Math.floor(Math.random()*people.length);
          grandmaArrayY.splice(0,1);
          grandmaPic.src = people[randomPersonNumber];
          console.log(grandmaPic.src);
        }

        // FIGURE OUT HOW TO MAKE THIS WORK WITH MOVEMENT AND HITTING THEM. GOT SO CLOSE
        // grandmaX = grandmaArrayX[0];
        // grandmaY = grandmaArrayY[0];
        // grandmaArrayY[0] = grandmaArrayY[0] +10;
        // if(grandmaArrayY[0] > 410){
        //   grandmaArrayY[0] = 90;
        // }
        // grandmaArrayX[0] = grandmaArrayX[0] + backgroundSpeed;
        // console.log(grandmaY, grandmaSpeedY, grandmaArrayX[0])
        // // var randomPersonPositionY =
        // grandmaY = 220;
        //   new Image(grandmaPicLoaded, grandmaPic, grandmaArrayX[0], grandmaArrayY[0]);
        //
        //     if(carY <= grandmaY && carY + 60 >= grandmaY && carX+132 >= grandmaX && carX <= grandmaX){
        //           //Main Car hits grandma and stops
        //           //grandma gets hit, splattered
        //           grandmaArrayX[0] = grandmaArrayX[0] + splatterDistance/2;
        //           grandmaArrayY[0] = 220;
        //           grandmaPic.src = "file:///Users/Shebby/Downloads/imageedit_2_3030481107.png"
        //           console.log("splat");
        //         }
        //
        //         if(grandmaArrayX.includes(-200)){
        //           grandmaArrayX.splice(0,1);
        //
        //           grandmaArrayX.push(crossX[0] + 30);
        //           var randomPersonNumber = Math.floor(Math.random()*people.length);
        //           grandmaPic.src = people[randomPersonNumber];
        //           console.log(grandmaY);
        //         }


// First Traffic Lane
  var lane1Y = 140;
  new Image(trafficCarPicLoaded, cars[randomCar[0]], trafficLane1[0], lane1Y);
    // This makes cars move left
  trafficLane1[0] = trafficLane1[0] + trafficSpeedX;
  // If changing speed of cars, be aware of divisibility of number inside includes
  if(trafficLane1.includes(-200)){
    trafficLane1.splice(trafficLane1.indexOf(-200),1);
    var randomDistance = 4 + Math.floor(Math.random()*4);
    //Generate cars at a random distance between 800-1500. (Divisible by 100)
    trafficLane1.push(randomDistance * carSpaceMultiple);
    var randomCarNumber1 = Math.floor(Math.random()*cars.length);
    randomCar.splice(0,1);
    randomCar.push(randomCarNumber1)
}

// Second Traffic Lane
var lane2Y = 220;
new Image(trafficCarPicLoaded, cars[randomCar2[0]], trafficLane2[0], lane2Y);
  // This makes cars move left
trafficLane2[0] = trafficLane2[0] + trafficSpeedX;
  // If changing speed of cars, be aware of divisibility of number inside includes
if(trafficLane2.includes(-200)){
  trafficLane2.splice(trafficLane2.indexOf(-200),1);
  //Generate cars at a random distance between 800-1500. (Divisible by 100)
  var randomDistance2 = 4 + Math.floor(Math.random()*4);
  trafficLane2.push(randomDistance2 * carSpaceMultiple);
  var randomCarNumber2 = Math.floor(Math.random()*cars.length);
  randomCar2.splice(0,1);
  randomCar2.push(randomCarNumber2)
}

// Third Traffic Lane
var lane3Y = 300;
new Image(trafficCarPicLoaded, cars[randomCar3[0]], trafficLane3[0], lane3Y);
  // This makes cars move left
trafficLane3[0] = trafficLane3[0] + trafficSpeedX;
  // If changing speed of cars, be aware of divisibility of number inside includes
if(trafficLane3.includes(-200)){
  trafficLane3.splice(trafficLane3.indexOf(-200),1);
    //Generate cars at a random distance between 800-1500. (Divisible by 100)
  var randomDistance3 = 4 + Math.floor(Math.random()*4);
  trafficLane3.push(randomDistance3 * carSpaceMultiple);
  var randomCarNumber3 = Math.floor(Math.random()*cars.length);
  randomCar3.splice(0,1);
  randomCar3.push(randomCarNumber3)
}


// }
  // MAIN CAR
  new Image(carPicLoaded, carPic, carX, carY);
  //TREES
var trafficCarXAdjustment = 120;
// console.log(carY, lane3Y);

// Hitting Cars
// Hitting back of lane1
  if(carY <= lane1Y + 35 && carY > lane1Y -55
    // Check if lane array contains x value of 200
  &&$.inArray((carX + trafficCarXAdjustment), trafficLane1) > -1){
    console.log(' HIITTTTTTTT');
};

//Hitting side of lane1
if(carX + 120 >= trafficLane1[0] && carX -120 <= trafficLane1[0] && carY <= lane1Y && carY + 60 >= lane1Y){
  // alert(' HIITTTTTTTT');
}

// Hitting back of lane2
if(carY <= lane2Y + 35 && carY > lane2Y -55
  // Check if lane array contains x value of 200
&&$.inArray((carX + trafficCarXAdjustment), trafficLane2) > -1){
  console.log(' HIITTTTTTTT');
}
// Hitting side of lane2
if(carX + 120 >= trafficLane2[0] && carX -120 <= trafficLane2[0] && carY <= lane2Y && carY + 60 >= lane2Y){
  // alert(' HIITTTTTTTT');
}

// Hitting back of lane3
if(carY <= lane3Y + 35 && carY > lane3Y -55
  // Check if lane array contains x value of 200
&&$.inArray((carX + trafficCarXAdjustment), trafficLane3) > -1){
  console.log(' HIITTTTTTTT');
}
// Hitting side of lane3
if(carX + 120 >= trafficLane3[0] && carX -120 <= trafficLane3[0] && carY <= lane3Y && carY + 60 >= lane3Y){
  // alert(' HIITTTTTTTT');
}


}

//Move Actual Game
function moveGame() {
  // grandmaY = grandmaY + grandmaSpeedY;
}
