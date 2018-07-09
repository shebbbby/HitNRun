// Only after window loads will this function execute
window.onload = function() {
  // Select "gameCanvas" from html element
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  var options = setInterval(drawOptionMenu, 1000/framesPerSecond);

//After clicking canvas, execute everything in exitOptionsMenu (Make it work only once)
  canvas.addEventListener('click',exitOptionsMenu,false);

  let clickedAlready = false;
  function exitOptionsMenu(e){
    if(!clickedAlready){
        clickedAlready = true;
          // Play intro scene
        introSounds(); // All sounds for intro
        var intro = setInterval(callBothIntro, 1000/framesPerSecond);

        // This function executes after 13 second intro
        setTimeout(function() {

            // Call actual game 1 second after intro ends
          var callGame = function(){
            setTimeout(function (){
              drawGame();
            }, 1000);
          }

          // Game has to be set to an interval
          var gamePlay = setInterval(callGame, 1000/framesPerSecond);
          // Constantly check if switcher is 1, this allows for the game interval to be stopped
          setInterval(function(){
                  if(switcher === 1){
                        clearInterval( gamePlay );
          }
        } , 1000/framesPerSecond);
            // This stops the intro movie
          clearInterval( intro );
          //Make movement speed up after every 10 seconds from start of game
          speedUp();
          // Make points go up from start of game every three seconds
          pointsUp();
          // This allows for random person immediately instead of blood.
          var randomPersonNumber = Math.floor(Math.random()*people.length);
          grandmaPic.src = people[randomPersonNumber];
          carX = 200; carY = 220; // Car begins in middle
        }, introTime);
      clearInterval( options );



    // LEFT AND RIGHT KEY DOWN
    document.addEventListener('keydown',keyDownListener,false);
    function keyDownListener(e){
    switch (e.keyCode){
      case 37:
      if(carY > 150){
      carY = carY - laneSwitch;
      // carPic.src = "file:///Users/Shebby/Downloads/imageedit_18_3872202865.png"
      }
      if(carY < 150){
        carY = carY - 0;
      }
      break;
      case 39:
      if(carY < 290){
      carY = carY + laneSwitch;
      // 80 for lane switching
      // carPic.src = "file:///Users/Shebby/Downloads/rightCar.png"
      }
      if(carY > 290){
        carY = carY + 0;
      }
      break;
    }
    }
    }

}
}
// Draw Selection Screen


// CAR SELECTION IMAGE INFO: ---------------------------------------------------------------
var carXPos = 60,carYPos = 200, carWidth = 132,carHeight = 60;
var purpleXPos = 240,purpleYPos = 200, purpleWidth = 132,purpleHeight = 60;
var lightPurpleXPos = 420,lightPurpleYPos = 200, lightPurpleWidth = 132,lightPurpleHeight = 60;
var blueXPos = 600,blueYPos = 200, blueWidth = 132,blueHeight = 60;
var darkBlueXPos = 60,darkBlueYPos = 300, darkBlueWidth = 132,darkBlueHeight = 60;
var grayXPos = 240,grayYPos = 300, grayWidth = 132,grayHeight = 60;
var whiteXPos = 420,whiteYPos = 300, whiteWidth = 132,whiteHeight = 60;
var yellowXPos = 600,yellowYPos = 300, yellowWidth = 132,yellowHeight = 60;
var greenXPos = 60,greenYPos = 400, greenWidth = 132,greenHeight = 60;
var darkGreenXPos = 240,darkGreenYPos = 400, darkGreenWidth = 132,darkGreenHeight = 60;
var lightGreenXPos = 420,lightGreenYPos = 400, lightGreenWidth = 132,lightGreenHeight = 60;
var lightPinkXPos = 600,lightPinkYPos = 400, lightPinkWidth = 132,lightPinkHeight = 60;

// -----------------------------------------------------------------------------------------


function drawOptionMenu() {
  // black screen
  colorRect(0,0,canvas.width,canvas.height, 'black');
  canvasContext.font = 'bold 10pt Calibri';
  canvasContext.fillText('Please Select Your Vehicle!', 150, 100);
  canvasContext.font = 'italic 40pt Times Roman';
  canvasContext.fillStyle = 'white';
  canvasContext.fillText('Please Select Your Vehicle!', 120, 150);
  canvasContext.font = '60pt Calibri';
  canvasContext.lineWidth = 4;
  canvasContext.strokeStyle = 'white';

  new Image(carPicLoaded, carPic, carXPos, carYPos,carWidth,carHeight);
  new Image(purpleCarPicLoaded, purpleMainCarPic, purpleXPos, purpleYPos,purpleWidth,purpleHeight);
  new Image(lightPurpleCarPicLoaded, lightPurpleMainCarPic, lightPurpleXPos, lightPurpleYPos,lightPurpleWidth,lightPurpleHeight);
  new Image(blueCarPicLoaded, blueMainCarPic, blueXPos, blueYPos,blueWidth,blueHeight);
  new Image(darkBlueCarPicLoaded, darkBlueCarPic, darkBlueXPos, darkBlueYPos,darkBlueWidth,darkBlueHeight);
  new Image(grayCarPicLoaded, grayMainCarPic, grayXPos, grayYPos,grayWidth,grayHeight);
  new Image(whiteMainCarPicLoaded, whiteMainCarPic, whiteXPos, whiteYPos,whiteWidth,whiteHeight);
  new Image(yellowMainCarPicLoaded, yellowMainCarPic, yellowXPos, yellowYPos,yellowWidth,yellowHeight);
  new Image(greenMainCarPicLoaded, greenMainCarPic, greenXPos, greenYPos,greenWidth,greenHeight);
  new Image(darkGreenMainCarPicLoaded, darkGreenMainCarPic, darkGreenXPos, darkGreenYPos,darkGreenWidth,darkGreenHeight);
  new Image(lightGreenMainCarPicLoaded, lightGreenMainCarPic, lightGreenXPos, lightGreenYPos,lightGreenWidth,lightGreenHeight);
  new Image(lightPinkMainCarPicLoaded, lightPinkMainCarPic, lightPinkXPos, lightPinkYPos,lightPinkWidth,lightPinkHeight);


  canvas.addEventListener('mousemove', function(e) {
    // calculate x y coordinates on canvas. (if you change dimensions, need to adjust these)
    var x = e.pageX - $(this).offset().left,
    y = e.pageY - $(this).offset().top;

    // Make selection magnified upon hover
    if (y > 200 && y < 260
        && x > 60 && x < 200) {
          carXPos = 50;
          carYPos = 190;
          carWidth = 160;
          carHeight = 73;
          document.querySelector('canvas').cursor = 'pointer';
    }else{
          carXPos = 60;
          carYPos = 200;
          carWidth = 132;
          carHeight = 60;
    }

    if (y > 200 && y < 260
        && x > 420 && x < 560) {
          lightPurpleXPos = 410;
          lightPurpleYPos = 190;
          lightPurpleWidth = 160;
          lightPurpleHeight = 73;
    }else{
          lightPurpleXPos = 420;
          lightPurpleYPos = 200;
          lightPurpleWidth = 132;
          lightPurpleHeight = 60;
    }
    if (y > 200 && y < 260
        && x > 240 && x < 380) {
          purpleXPos = 230;
          purpleYPos = 190;
          purpleWidth = 160;
          purpleHeight = 73;
    }else{
          purpleXPos = 240;
          purpleYPos = 200;
          purpleWidth = 132;
          purpleHeight = 60;
    }
    if (y > 200 && y < 260
        && x > 600 && x < 740) {
          blueXPos = 590;
          blueYPos = 190;
          blueWidth = 160;
          blueHeight = 73;
    }else{
          blueXPos = 600;
          blueYPos = 200;
          blueWidth = 132;
          blueHeight = 60;
    }
    if (y > 300 && y < 360
        && x > 60 && x < 200) {
          darkBlueXPos = 50;
          darkBlueYPos = 290;
          darkBlueWidth = 160;
          darkBlueHeight = 73;
    }else{
          darkBlueXPos = 60;
          darkBlueYPos = 300;
          darkBlueWidth = 132;
          darkBlueHeight = 60;
    }
    if (y > 300 && y < 360
        && x > 240 && x < 380) {
          grayXPos = 230;
          grayYPos = 290;
          grayWidth = 160;
          grayHeight = 73;
    }else{
          grayXPos = 240;
          grayYPos = 300;
          grayWidth = 132;
          grayHeight = 60;
    }
    if (y > 300 && y < 360
        && x > 420 && x < 560) {
          whiteXPos = 410;
          whiteYPos = 290;
          whiteWidth = 160;
          whiteHeight = 73;
    }else{
          whiteXPos = 420;
          whiteYPos = 300;
          whiteWidth = 132;
          whiteHeight = 60;
    }
    if (y > 300 && y < 360
        && x > 600 && x < 740) {
          yellowXPos = 590;
          yellowYPos = 290;
          yellowWidth = 160;
          yellowHeight = 73;
    }else{
          yellowXPos = 600;
          yellowYPos = 300;
          yellowWidth = 132;
          yellowHeight = 60;
    }
    if (y > 400 && y < 460
        && x > 60 && x < 200) {
          greenXPos = 50;
          greenYPos = 390;
          greenWidth = 160;
          greenHeight = 73;
    }else{
          greenXPos = 60;
          greenYPos = 400;
          greenWidth = 132;
          greenHeight = 60;
    }
    if (y > 400 && y < 460
        && x > 240 && x < 380) {
          darkGreenXPos = 230;
          darkGreenYPos = 390;
          darkGreenWidth = 160;
          darkGreenHeight = 73;
    }else{
          darkGreenXPos = 240;
          darkGreenYPos = 400;
          darkGreenWidth = 132;
          darkGreenHeight = 60;
    }
    if (y > 400 && y < 460
        && x > 420 && x < 560) {
          lightGreenXPos = 410;
          lightGreenYPos = 390;
          lightGreenWidth = 160;
          lightGreenHeight = 73;
    }else{
          lightGreenXPos = 420;
          lightGreenYPos = 400;
          lightGreenWidth = 132;
          lightGreenHeight = 60;
    }
    if (y > 400 && y < 460
        && x > 600 && x < 740) {
          lightPinkXPos = 590;
          lightPinkYPos = 390;
          lightPinkWidth = 160;
          lightPinkHeight = 73;
    }else{
          lightPinkXPos = 600;
          lightPinkYPos = 400;
          lightPinkWidth = 132;
          lightPinkHeight = 60;
    }
    // document.querySelector('canvas').setAttribute('style', 'width: 60%;')

});

// This function allows you to select car color
  canvas.addEventListener('click', function(e) {
    // calculate x y coordinates on canvas. (if you change dimensions, need to adjust these)
    var x = e.pageX - $(this).offset().left,
    y = e.pageY - $(this).offset().top;
    console.log(y, x)

    // implement collision detection via the coordinates the element you want to click (assuming you know where it is)
    if (y > 200 && y < 260
        && x > 240 && x < 380) {
        carPic.src ="./Images/purpleMainCar.png";
    }
    if (y > 200 && y < 260
        && x > 420 && x < 560) {
        carPic.src ="./Images/lightPurpleMainCar.png";
    }
    if (y > 200 && y < 260
        && x > 600 && x < 740) {
        carPic.src ="./Images/blueMainCar.png";
    }
    if (y > 300 && y < 360
        && x > 60 && x < 200) {
        carPic.src ="./Images/darkBlueMainCar.png";
    }
    if (y > 300 && y < 360
        && x > 240 && x < 380) {
        carPic.src ="./Images/grayMainCar.png";
    }
    if (y > 300 && y < 360
        && x > 420 && x < 560) {
        carPic.src ="./Images/whiteMainCar.png";
    }
    if (y > 300 && y < 360
        && x > 600 && x < 740) {
        carPic.src ="./Images/yellowMainCar.png";
    }
    if (y > 400 && y < 460
        && x > 60 && x < 200) {
        carPic.src ="./Images/greenMainCar.png";
    }
    if (y > 400 && y < 460
        && x > 240 && x < 380) {
        carPic.src ="./Images/darkGreenMainCar.png";
    }
    if (y > 400 && y < 460
        && x > 420 && x < 560) {
        carPic.src ="./Images/lightGreenMainCar.png";
    }
    if (y > 400 && y < 460
        && x > 600 && x < 740) {
        carPic.src ="./Images/lightPinkMainCar.png";
    }

    // document.querySelector('canvas').setAttribute('style', 'width: 60%;')

});
}

// DRAW INTRO MOVIE SCENE
function drawIntro() {
  document.querySelector('#directions').innerHTML = ' Please wait for intro movie to end';
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
          carSpeedX = stop;
          //grandma gets hit, splattered "blood"
          grandmaPic.src = "./Images/blood.png"
          // Find way to store carX value without having to reference it, so that blood could stay there.
          grandmaX = 430 + splatterDistance; // NEED TO FIGURE OUT HOW TO USE carX and not 430
          grandmaY = carY;
          grandmaSpeedX = stop;
          grandmaSpeedY = stop;
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

// DRAW ACTUAL GAME!!!
function drawGame() {
  document.querySelector('#directions').innerHTML = ' Move using left (<) and right (>) keys! ';

  // black screen
  colorRect(0,0,canvas.width,canvas.height, 'black');
  // Top Grass
  colorRect(0,0,canvas.width,100, '#94c840');
  //Bottom Grass
  colorRect(0,410,canvas.width,190, '#94c840');
  //Traffic lines
  colorRect(0, 130, canvas.width,5, 'yellow'); //Yellow canvaswidth line
  colorRect(0, 370, canvas.width,5, 'white'); // White canvaswidth line
  for (var i = 0; i < lanesX.length; i++){
   for (var y = 210; y <= 290; y+=80){
    colorRect(lanesX[i], y, 50,5, 'white');
}
      // Make lanes move left
    lanesX[i] = lanesX[i] + backgroundSpeed;
  }

    // Regenerate lanes
  if(lanesX[0] <= -100){
    lanesX.splice(0,1);
    lanesX.push(lanesX[7] + 100);
  }
// Push tree into treesX array every 100
for (var t = 0; t < treesX.length; t++){
  // randomTrees is an array of random index numbers
  new Image(treePicLoaded, trees[randomTrees[t]], treesX[t], 10);
  new Image(treePicLoaded, trees[randomTrees[t]], treesX[t], 430);
  // Make trees move left
    treesX[t] = treesX[t] + backgroundSpeed;
}
// If first tree in array treesX is less than -100 then regenerate
if(treesX[0] <= -100){
  treePusher();
}

//CrossWalk with people
for (var i = 105; i < 420; i+=55){
colorRect(crossX[0], i, 80,20, 'white');
}
crossX[0] = crossX[0] + backgroundSpeed;
 // Middle of Crosswalk vertically
if(crossX[0] <= -200){
 crossX.splice(0,1);
 crossX.push(crossWalkDistance);
}

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
          points += 0.3;
          grandmaPic.src = "./Images/blood.png"
          splat.play();
          // console.log("splat");
        }

        if(grandmaArrayX[0] <= -200){
          grandmaArrayX.splice(0,1);
          grandmaArrayX.push(crossX[0] + 30);
          var randomPersonNumber = Math.floor(Math.random()*people.length);
          grandmaArrayY.splice(0,1);
          grandmaPic.src = people[randomPersonNumber];
        }

// First Traffic Lane
  new Image(trafficCarPicLoaded, cars[randomCar[0]], trafficLane1[0], lane1Y);
    // This makes cars move left
  trafficLane1[0] = trafficLane1[0] + trafficSpeedX;
  // If changing speed of cars, be aware of divisibility of number inside includes
  if(trafficLane1[0] <= -200){
    trafficLane1.splice(trafficLane1[0],1);
    var randomDistance = 4 + Math.floor(Math.random()*5);
    //Generate cars at a random distance between 800-1500. (Divisible by 100)
    trafficLane1.push(randomDistance * carSpaceMultiple);
    var randomCarNumber1 = Math.floor(Math.random()*cars.length);
    randomCar.splice(0,1);
    randomCar.push(randomCarNumber1)
    // console.log('lane 1: '+trafficLane1[0]);
}

// Second Traffic Lane
new Image(trafficCarPicLoaded, cars[randomCar2[0]], trafficLane2[0], lane2Y);
  // This makes cars move left
trafficLane2[0] = trafficLane2[0] + trafficSpeedX;
  // If changing speed of cars, be aware of divisibility of number inside includes
  if(trafficLane2[0] <= -200){
    trafficLane2.splice(trafficLane2[0],1);
  //Generate cars at a random distance between 800-1500. (Divisible by 100)
  var randomDistance2 = 4 + Math.floor(Math.random()*5);
  trafficLane2.push(randomDistance2 * carSpaceMultiple);
  var randomCarNumber2 = Math.floor(Math.random()*cars.length);
  randomCar2.splice(0,1);
  randomCar2.push(randomCarNumber2)
  // console.log('lane 2: '+trafficLane2[0]);

}

// Third Traffic Lane
new Image(trafficCarPicLoaded, cars[randomCar3[0]], trafficLane3[0], lane3Y);
  // This makes cars move left
trafficLane3[0] = trafficLane3[0] + trafficSpeedX;
  // If changing speed of cars, be aware of divisibility of number inside includes
if(trafficLane3[0] <= -200){
  trafficLane3.splice(trafficLane3[0],1);
    //Generate cars at a random distance between 800-1500. (Divisible by 100)
  var randomDistance3 = 4 + Math.floor(Math.random()*5);
  trafficLane3.push(randomDistance3 * carSpaceMultiple);
  var randomCarNumber3 = Math.floor(Math.random()*cars.length);
  randomCar3.splice(0,1);
  randomCar3.push(randomCarNumber3)
  // console.log('lane 3: '+trafficLane3[0]);
}

// Distance adjustments to make sure there is always space for main car
if(trafficLane3[0] < trafficLane1[0] && trafficLane3[0] + 100 > trafficLane1[0]){
  trafficLane1[0] = trafficLane1[0] + 300;
}
if(trafficLane1[0] < trafficLane3[0] && trafficLane1[0] + 100 > trafficLane3[0]){
  trafficLane3[0] = trafficLane1[0] + 300;
}
if(trafficLane2[0] < trafficLane3[0] && trafficLane2[0] + 100 > trafficLane3[0]){
  trafficLane3[0] = trafficLane2[0] + 300;
}
if(trafficLane3[0] < trafficLane2[0] && trafficLane3[0] + 100 > trafficLane2[0]){
  trafficLane2[0] = trafficLane3[0] + 300;
}
if(trafficLane3[0] < trafficLane1[0] && trafficLane3[0] + 250 > trafficLane1[0]){
  trafficLane1[0] = trafficLane3[0] + 300;
}
if(trafficLane1[0] < trafficLane3[0] && trafficLane1[0] + 250 > trafficLane3[0]){
  trafficLane3[0] = trafficLane1[0] + 300;
}
if(trafficLane2[0] < trafficLane3[0] && trafficLane2[0] + 250 > trafficLane3[0]){
  trafficLane3[0] = trafficLane2[0] + 300;
}
if(trafficLane3[0] < trafficLane2[0] && trafficLane3[0] + 250 > trafficLane2[0]){
  trafficLane2[0] = trafficLane3[0] + 300;
}
if(trafficLane3[0] === trafficLane2[0]){
  trafficLane3[0] = trafficLane2[0] + 300;
}
if(trafficLane3[0] === trafficLane1[0]){
  trafficLane3[0] = trafficLane1[0] + 300;
}
if(trafficLane2[0] === trafficLane1[0]){
  trafficLane2[0] = trafficLane1[0] + 300;
}

  // MAIN CAR
  new Image(carPicLoaded, carPic, carX, carY);
  //TREES
// Hitting Cars
// Hitting back of lane1
  if(carY <= lane1Y + 35 && carY > lane1Y -55
    // Check if lane array contains x value of 200
  &&$.inArray((carX + trafficCarXAdjustment), trafficLane1) > -1){
    var endScore = Math.ceil(points);
    if(endScore > highScore){

    }
      endGame();

    // colorRect(0,0,canvas.width,canvas.height, 'black');
};

//Hitting side of lane1
//For more leeway on side crashes, make carX - (xxx) lower
if(carX + 120 >= trafficLane1[0] && carX -110 <= trafficLane1[0] && carY <= lane1Y && carY + 60 >= lane1Y){
  var endScore = Math.ceil(points);
  if(endScore > highScore){
    highScore = Math.ceil;
  }
    endGame();
}

// Hitting back of lane2
if(carY <= lane2Y + 35 && carY > lane2Y -55
  // Check if lane array contains x value of 200
&&$.inArray((carX + trafficCarXAdjustment), trafficLane2) > -1){
  var endScore = Math.ceil(points);
  if(endScore > highScore){
    highScore = Math.ceil;
  }
    endGame();
}
// Hitting side of lane2
if(carX + 120 >= trafficLane2[0] && carX -110 <= trafficLane2[0] && carY <= lane2Y && carY + 60 >= lane2Y){
  var endScore = Math.ceil(points);
  if(endScore > highScore){
    highScore = Math.ceil;
  }
    endGame();
}

// Hitting back of lane3
if(carY <= lane3Y + 35 && carY > lane3Y -55
  // Check if lane array contains x value of 200
&&$.inArray((carX + trafficCarXAdjustment), trafficLane3) > -1){
  var endScore = Math.ceil(points);
  if(endScore > highScore){
    highScore = Math.ceil;
  }
  endGame();
}
// Hitting side of lane3
if(carX + 120 >= trafficLane3[0] && carX -110 <= trafficLane3[0] && carY <= lane3Y && carY + 60 >= lane3Y){
  var endScore = Math.ceil(points);
  if(endScore > highScore){
    highScore = Math.ceil;
  }
  endGame();
  // colorRect(0,0,canvas.width,canvas.height, 'black');
}
canvasContext.fillText(Math.ceil(points), 420, 90);
canvasContext.font = '30pt Calibri';
canvasContext.lineWidth = 4;
canvasContext.strokeStyle = 'blue';

}
