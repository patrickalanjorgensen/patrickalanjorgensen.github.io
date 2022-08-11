

   
   function drawP1MineSelector() {
     drawGrid();
     
    drawGoals();
     drawBombs();  
     fill(255);
     text("player 1 place your bombs!",10,30);
     text("bombs left:" + bombsLeft, gridX + cellSize * gridWidth + 50, gridY + 50);
     if(bombsLeft > 0) {
       drawButton("Placing!", "grey", bombButtonX, bombButtonY, bombButtonW, bombButtonH);
     } else {
       drawButton("ready!", "green", bombButtonX, bombButtonY, bombButtonW, bombButtonH);
     }
     
     if(bombsLeft > 0) {
       drawButton("Placing!", "grey", bombButtonX, bombButtonY, bombButtonW, bombButtonH);
     } else {
       drawButton("ready!", "green", bombButtonX, bombButtonY, bombButtonW, bombButtonH);
     }

     drawButton("Bombs", "grey", bombSelectButtonX, bombSelectButtonY, bombSelectButtonW, bombSelectButtonH);
     drawButton("Goals", "grey", goalSelectButtonX, goalSelectButtonY, goalSelectButtonW, goalSelectButtonH);

   }
   
   
   
   function drawP2MineSelector() {
     drawGrid();
     drawGoals();
     drawBombs();  
     fill(255);
     text("player 2 place your bombs!",10,30);
     text("bombs left:" + bombsLeft, gridX + cellSize * gridWidth + 50, gridY + 50);
     if(bombsLeft > 0) {
       drawButton("Placing!", "grey", bombButtonX, bombButtonY, bombButtonW, bombButtonH)
     } else {
       drawButton("ready!", "green", bombButtonX, bombButtonY, bombButtonW, bombButtonH)

     }

     drawButton("Bombs", "grey", bombSelectButtonX, bombSelectButtonY, bombSelectButtonW, bombSelectButtonH);
     drawButton("Goals", "grey", goalSelectButtonX, goalSelectButtonY, goalSelectButtonW, goalSelectButtonH);
   }


   



