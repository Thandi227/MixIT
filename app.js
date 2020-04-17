
//TIMER

function startTimer() {
        let hardLevel = 30;    
        // let mediumLevel = 60;
        // let easyLevel = 150;
        
    setInterval(function () {       
        hardLevel--;
        if (hardLevel >= 0) {
          span = document.getElementsByClassName("level");
          span.innerHTML = hardLevel;
        }

        // mediumLevel--;
        // if (mediumLevel >= 0) {
        //   span = document.getElementsByClassName("level");
        //   span.innerHTML = mediumLevel;
        // }

        // easyLevel--;
        // if (easyLevel >= 0) {
        //   span = document.getElementsByClassName("level");
        //   span.innerHTML = easyLevel;
        // }
    

    }, 1000);
    
}

$(".start").click(function(){
    startTimer();
 });


 

// USER 
//---------------------------------------------------------------------


//What do I want my javascript to do, I want to be able to start the game, match two elements to eachother, count the number of moves made (doesn't matter if its incorrect or correct). And then I want to be able to say the user lost or won.

//START GAME WITH TIMER
//I have my timer above, but it doesn't start when you click the start button


//Drag and Drop
// We're going to use if else statements. If the elements within the statement match we assign a value of true and we want them to stay flipped, else if they don't match we assign a value of false and want them to flip back over

function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

//COUNT INGREDIENTS
document.getElementById("bowl").onchange = function () {myIngredients ()};

function myIngredients () {
    const numberFruits = 0;
        numberFruits++; 

        console.log(numberFruits);
    document.getElementById("bowl");
        numberFruits.value = numberFruits.value.toUpperCase();
}
//GAME WON

//GAME OVER

function gameOver (){
    alert('Time is Up. The Game Is Over!');
}

//---------------------------------------------------------------------
// CPU (automated) 
//_------------------------------------MY NOTES-------------------


// //TIMER

// function startTimer(duration, display) {
//     let timer = duration, minutes, seconds;
//     setInterval(function () {

// //We use the parseInt funtion because it parses a string and returns a number 
//         minutes = parseInt(timer / 60, 10)
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.text(minutes + ":" + seconds);
// //If the difference is less than 0, then timer = the amount of duration or time left.
//         // if (--timer < 0) {
//         //     timer = duration;
//         // }


//         // let mediumLevel = "00:60";
//         // let easyLevel = "03:00";
       
//         hardLevel--;
//         if (hardLevel >= 0) {
//           span = document.getElementsByClassName("level");
//           span.innerHTML = hardLevel;
//         }
//         // if (hardlevel === 0) {
//         //     alert('sorry, out of time');
//         //     clearInterval(counter);
//         // }   

//     }, 1000);
    
// }

// $(".start").click(function(){
//     startTimer();
//  });

// jQuery(function ($) {
//     let threeMinutes = 60 * 3,
//         display = $('.easyLevel');
//     startTimer(threeMinutes, display);
// });

// document.getElementsByClassName("roundEasy").addEventListner("click",threeMinutes);

// jQuery(function ($) {
//     let oneMinute = 60 * 1,
//         display = $('.mediumLevel');
//     startTimer(oneMinute, display);
// });

// document.getElementsByClassName("roundMedium").addEventListner("click", oneMinute);

// jQuery(function ($) {
//     let thirtySeconds = 60 * .5,
//         display = $('.hardLevel');
//     startTimer(thirtySeconds, display);
// });

// document.getElementsByClassName("roundHard").addEventListner("click", thirtySeconds);
