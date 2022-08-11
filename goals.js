///start goals code
function drawGoals() {
  if(gameState == 4) {
    goalArray = goalArray2
  } else {
    goalArray = goalArray1
  }

   for(var i = 0; i < gridHeight; i++) {
      for(var j = 0; j < gridWidth; j++) {
        if(goalArray[i][j] == 1) {
          fill(0);
          var goalX = j*cellSize + gridX + cellSize/2;
          var goalY = i*cellSize + gridY + cellSize/2;
          fill(0,255,0);
          ellipse(goalX, goalY, playerSize, playerSize);
        }
      }
    }
}


function drawGoals2() {
goalArray = goalArray2

for(var i = 0; i < gridHeight; i++) {
  for(var j = 0; j < gridWidth; j++) {
    if(goalArray[i][j] == 1) {
      fill(0);
      var goalX = j*cellSize + gridX2 + cellSize/2;
      var goalY = i*cellSize + gridY2 + cellSize/2;
      
      fill(0,255,0);
      ellipse(goalX, goalY, playerSize, playerSize);
    }
  }
}
} 


function checkGoalPlace() {
    rowdex = -1;
  coldex = -1;
  var i = 1;
  // goal is to map the locations of each mouse press to a square in the grid
    for(i = 1; i <= gridHeight; i++) {
      if((mouseY < i * cellSize + gridY) && mouseY > gridY) {
        rowdex = i - 1;
        break;
      }
    }
    for(i = 1; i <= gridWidth; i++) {
      if((mouseX < i * cellSize + gridX) && mouseX > gridX) {
        coldex = i - 1;
        break;
      }
    }
  if(rowdex >= 0 && coldex >= 0){
  if(goalArray[rowdex][coldex] == 1) {     //if true set to false/false set to true
    // deleting bomb
    goalsLeft++;
    goalArray[rowdex][coldex] = 0;
    } else { 
    // adding a bomb
    if(goalsLeft > 0) {
    goalsLeft--;
    goalArray[rowdex][coldex] = 1;
    }
  }
  }
  print("success")
}

/// end goals code