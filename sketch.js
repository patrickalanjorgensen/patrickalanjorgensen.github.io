//Initial Creation 6/5/22

/* implement bfs so that there is ensured a path to get to the final location 
  bfs
  -bomb explosions and not drawing bombs
*/

var gameState = 0;
/*
0: spash, transition on: press start
1: ready to place bombs p1: press enter
2: p1 placing transition on: transition on timer
3: ready to place bombs p2: enter
4: p2 placing: timer
5: ready to race?: endter
6: racing! transition: win
7: results: play again button
*/




let timeLimit = 5;
let countDown = 3;




// location of player
var player1X = 0;
var player1Y = 0;
var player2X = 0;
var player2Y = 0;

//for some reason couldn't put in mouse pressed 
// bombs
var rowdex = -1;
var coldex = -1;

var gridWidth = 13;
var gridHeight = 13;
var cellSize = 30;
var playerSize = cellSize/2;
var bombArray = [...Array(gridWidth)].map(e => Array(gridHeight).fill(0));
var bombArray1 = [...Array(gridWidth)].map(e => Array(gridHeight).fill(0));
var bombArray2 = [...Array(gridWidth)].map(e => Array(gridHeight).fill(0));

var goalArray = [...Array(gridWidth)].map(e => Array(gridHeight).fill(0));
var goalArray1 = [...Array(gridWidth)].map(e => Array(gridHeight).fill(0));
var goalArray2 = [...Array(gridWidth)].map(e => Array(gridHeight).fill(0));

console.log(bombArray);

var gridX = 25;
var gridY = 80;

var gridX2 = 500;
var gridY2 = 80;

var totalBombs = 10;
var bombsLeft = totalBombs;

var totalGoals = 3;
var totalGoals1 = totalGoals;
var totalGoals2 = totalGoals;

var goalsLeft = totalGoals;

var player1Intent = 0;
var player2Intent = 0;

//vars having to do with the first gameState
var startButtonX = 40;
var startButtonY = 50;
var startButtonW = 70;
var startButtonH = 50;

var beginButtonX = 40;
var beginButtonY = 100;
var beginButtonW = 70;
var beginButtonH = 50;

var bombButtonX = gridX + cellSize * gridWidth + 50;
var bombButtonY = gridY + 75;
var bombButtonW = 70;
var bombButtonH = 35;

var bombSelectButtonX = gridX + cellSize * gridWidth + 50;
var bombSelectButtonY = gridY + 125;
var bombSelectButtonW = 70;
var bombSelectButtonH = 35;

var goalSelectButtonX = gridX + cellSize * gridWidth + 50;
var goalSelectButtonY = gridY + 175;
var goalSelectButtonW = 70;
var goalSelectButtonH = 35;
//vars having to do with setup
var drawState = -1; // 1 is setting the player location, 2 is setting the bomb location and 3 is the goal locations

function setup() {
  createCanvas(1400, 600);
  background(0);    
  stroke(0,0,255);
  frameRate(30)
}



function keyPressed() {
  checkPlayer1Move();
  checkPlayer2Move();
}



function keyReleased() {
  if ((keyCode == UP_ARROW && player1Intent == 1)  || 
     (keyCode == RIGHT_ARROW && player1Intent == 2) ||
     (keyCode == DOWN_ARROW && player1Intent == 3) ||
     (keyCode == LEFT_ARROW && player1Intent == 4)) {
    print("RELEASED: " + keyCode)
    player1Intent = 0;
    clearInterval(player1Timer)
   }
   
   if ((key == 'w' && player2Intent == 1)  || 
     (key == 'd' && player2Intent == 2) ||
     (key == 's' && player2Intent == 3) ||
     (key == 'a' && player2Intent == 4)) {
    print("RELEASED: " + keyCode)
    player2Intent = 0;
    clearInterval(player2Timer)
   }
}


function drawRaceStaging() {
fill(255);
text("Player 1 place your fingers on WASD! Player 2 place your fingers on the arrow keys! Both players repectively press UP to begin", gridX/2, gridY/3);
let currentTime = int(millis() / 1000);
countDown = timeLimit - currentTime;

if(countDown < 0) {
countDown = 0;
gameState++;
}

textSize(24);
fill(0,102, 153);
text("TIME: " + currentTime, 30, 70);

}


function drawButton(bText, bColor, locationX, locationY, bWidth, bHeight) {
if(bColor == "red") {
  fill(255, 0, 0);
} else if(bColor == "green") {
  fill(0,255,0)
}
else if(bColor == "grey") {
  fill(128,128,128)
} else {
  fill(0,0,255);
}
rect(locationX, locationY, bWidth, bHeight)
fill(255);
text(bText,locationX + bWidth/4,locationY + bHeight/2);


}



function drawGrid() {
  fill(255);
  rect(gridX, gridY, cellSize * gridWidth, cellSize * gridHeight);
  for(var i = 1; i < gridHeight; i++) {
    var y = i*cellSize + gridY;
    line(gridX, y, cellSize * gridWidth + gridX, y); 
  }
  for(i = 1; i < gridWidth; i++) {
    var x = i*cellSize + gridX;
    line(x, gridY, x, cellSize * gridHeight + gridY);
  }

}

function drawGrid2() {
  fill(255);
  rect(gridX2, gridY2, cellSize * gridWidth, cellSize * gridHeight);
  for(var i = 1; i < gridHeight; i++) {
    var y = i*cellSize + gridY2;
    line(gridX2, y, cellSize * gridWidth + gridX2, y); 
  }
  for(i = 1; i < gridWidth; i++) {
    var x = i*cellSize + gridX2;
    line(x, gridY2, x, cellSize * gridHeight + gridY2);
  }

}


/*   switch(drawState) {
       case 1: 
         break;
       case 2: 
         break;
       case 3: 
         break;
     } */


function mousePressed() {
  if((gameState == 2 || gameState == 4) && drawState == 2) {
  
    checkBombPlace()
  } else if ((gameState == 2 || gameState == 4) && drawState == 3) {
    checkGoalPlace()
  }
}
  
  function mouseReleased() {
  // these functions are reduntant - what is there function? checking if a certain button is clicked - 
  // could even change the button to a class so that I don't have to expose all the attributes and just have a member function.
  if(gameState == 0 && mouseX > startButtonX && 
  mouseX < startButtonX + startButtonW && 
  mouseY > startButtonY && mouseY < startButtonY + startButtonH) {
    startButtonClicked() 
  }
  if(gameState == 1 && mouseX > beginButtonX && 
  mouseX < beginButtonX + beginButtonW && 
  mouseY > beginButtonY && mouseY < beginButtonY + beginButtonH) {
    begin1ButtonClicked() 
  }


  // bomb button
  if((gameState == 2 || gameState == 4) && mouseX > bombButtonX && 
  mouseX < bombButtonX + bombButtonW && 
  mouseY > bombButtonY && mouseY < bombButtonY + bombButtonH && bombsLeft == 0) {
    bombButtonClicked() 
  }

  if((gameState == 2 || gameState == 4) && mouseX > bombSelectButtonX && 
  mouseX < bombSelectButtonX + bombSelectButtonW && 
  mouseY > bombSelectButtonY && mouseY < bombSelectButtonY + bombSelectButtonH) {
     print("bomb buttons pressed")
    drawState = 2
  }

  if((gameState == 2 || gameState == 4) && mouseX > goalSelectButtonX && 
  mouseX < goalSelectButtonX + goalSelectButtonW && 
  mouseY > goalSelectButtonY && mouseY < goalSelectButtonY + goalSelectButtonH) {
     print("goal buttons pressed" + drawState)
    drawState = 3
  }


  if(gameState == 3 && mouseX > beginButtonX && 
  mouseX < beginButtonX + beginButtonW && 
  mouseY > beginButtonY && mouseY < beginButtonY + beginButtonH) {
    begin2ButtonClicked() 
    bombsLeft = totalBombs;
    bombArray1 = bombArray
    bombArray = bombArray2
// store goals
    goalsLeft = totalGoals;
    goalArray1 = goalArray
    goalArray = goalArray2
  }
  if(gameState == 5) {
    //timer()
    var tempX = gridX2;
    var tempY = gridY2;
    gridX2 = gridX;
    gridY2 = gridY;
    gridX = tempX;
    gridY = tempY

  }
  
  }
  
  // these functions are redundant change to increase gameState function.
  function startButtonClicked() {
  gameState++;
  print("button clicked");
  }
  
  function begin1ButtonClicked() {
  gameState++;
  print("button1 clicked");
  }
  
  function bombButtonClicked() {
  if(gameState == 4) {
    bombArray2 = bombArray;
  }
  gameState++;
  print("button1 clicked");
  }
  
  function begin2ButtonClicked() {
  gameState++;
  print("button3 clicked");
  }
  



function draw() {
  background(0);
  switch(gameState) {
    case 0: drawSplash()
      break;
    case 1: drawP1Staging()
      break;
    case 2: drawP1MineSelector()
      break;
    case 3: drawP2Staging()
      break;
    case 4: drawP2MineSelector()
      break;
    case 5: drawRaceStaging()
      break;
    case 6: drawRace()
      break;
    case 7: drawWinner()
      break;
    default: 
      fill(255);
      text("There's a fundamental error!" + gameState,10,30);
    }
}
