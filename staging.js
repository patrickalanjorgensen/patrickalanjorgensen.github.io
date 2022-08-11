

function drawP1Staging() {
    fill(255);
    text("Player 1 press Begin! to place your bombs!", gridX/2, gridY/3);
    text("You have 30 seconds!", gridX/2, gridY/3 + 30);
    
    drawButton("Begin!", "green", beginButtonX, beginButtonY, beginButtonW, beginButtonH)
   }

   function drawP2Staging() {
    fill(255);
    text("Player 2 press Begin! to place your bombs!", gridX/2, gridY/3);
    text("You have 30 seconds!", gridX/2, gridY/3 + 30);
    
    drawButton("Begin!", "green", beginButtonX, beginButtonY, beginButtonW, beginButtonH)
   }
