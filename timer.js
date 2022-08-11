/*
let timeLimit = 5;
let countdown;

setup frameRate(30)

let currentTime = int(millis() / 1000);
countDown = timeLimit - currentTime;

if(countDown < 0) {
 countDown = 0;
  gameState++;
}

textSize(24);
fill(0,102, 153);
text("TIME: " + currentTime, 30, 380);
fill(0);
*/



function timer() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    // startTimer(fiveMinutes, display);
  }
  

  
/////
// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

  