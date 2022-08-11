function drawBombs() {
    if(gameState == 4) {
      bombArray = bombArray2
    } else {
      bombArray = bombArray1
    }
    
     for(var i = 0; i < gridHeight; i++) {
        for(var j = 0; j < gridWidth; j++) {
          if(bombArray[i][j] == 1) {
            fill(0);
            var bombX = j*cellSize + gridX + cellSize/2;
            var bombY = i*cellSize + gridY + cellSize/2;
            
            if(bombX == player1X && bombY == player1Y) { // track a collision between a bomb and the prayer
               if(bombArray[rowdex][coldex] == 1) { //erase the bomb
                  //if true set to false/false set to true
                    bombArray[rowdex][coldex] = 0;
                } else {
                    bombArray[rowdex][coldex] = 1;
                }
                //player1Reset();
            } 
            // end collision tracking
            fill(0);
            ellipse(bombX, bombY, playerSize, playerSize);
          }
        }
      }
    }


    function drawBombs2() {
      bombArray = bombArray2
      
      for(var i = 0; i < gridHeight; i++) {
        for(var j = 0; j < gridWidth; j++) {
          if(bombArray[i][j] == 1) {
            fill(0);
            var bombX = j*cellSize + gridX2 + cellSize/2;
            var bombY = i*cellSize + gridY2 + cellSize/2;
            
            fill(0);
            ellipse(bombX, bombY, playerSize, playerSize);
          }
        }
      }
      }
      
      function deleteBomb(locationX, locationY, whichBombArray) {
      switch(whichBombArray) {
        case 1:
          bombArray1[locationX][locationY] = 0;
          break;
        case 2:
          bombArray2[locationX][locationY] = 0;
          break;
      }
      }
      
      function checkBombPlace() {
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
      if(bombArray[rowdex][coldex] == 1) {     //if true set to false/false set to true
        // deleting bomb
        bombsLeft++;
        bombArray[rowdex][coldex] = 0;
        } else { 
        // adding a bomb
        if(bombsLeft > 0) {
        bombsLeft--;
        bombArray[rowdex][coldex] = 1;
        }
      }
      }
      print("success")
      }
      