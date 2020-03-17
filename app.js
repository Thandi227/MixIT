

//TIMER

let levelEasyTime = '00:03:00';

function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor( (t/1000) % 60 );
    let minutes = Math.floor( (t/1000/60) % 60 );
    return {
      'total': t,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime){
    let timer = document.getElementById(id);
    let timeinterval = setInterval(function(){
      let t = getTimeRemaining(endtime);
      timer.innerHTML = 'minutes: ' + t.minutes + '<br>' +
                        'seconds: ' + t.seconds;
      if(t.total<=0){
        clearInterval(timeinterval);
      }
    },1000);
  }

let minutesSpan = clock.querySelector('.minutes');
let secondsSpan = clock.querySelector('.seconds');

function updateClock(){
    let t = getTimeRemaining(endtime);
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = t.seconds;

}
    // //reset timer
    // second = 0;
    // minute = 0; 
    // hour = 0;
    // var timer = document.querySelector(".timer");
    // timer.innerHTML = "0 mins 0 secs";
    // clearInterval(interval);



// //BUTTONS
// // I added "addEventListener" to the my element so that when a user clicks a button an action occurs

// document.getElementsByClassName("roundEasy").addEventListner("click",levelEasy);
// document.getElementsByClassName("roundMedium").addEventListner("click", levelMedium);
// document.getElementsByClassName("roundHard").addEventListner("click", levelHard);

// // Below are the functions for each level
// let levelEasy = 3;
// function levelEasy() {
    
//   }

// function levelMedium() {
    
// }

// function levelHard() {
    
// }

// //START 
// document.body.onload = startGame();
// function startGame(){
 
//     // empty the openCards array
//     openedCards = [];

//     // shuffle deck
//     cards = shuffle(card);
//     // remove all exisiting classes from each card
//     for (var i = 0; i < card.length; i++){
//         deck.innerHTML = "";
//         [].forEach.call(card, function(item) {
//             deck.appendChild(item);
//         });
//         cards[i].classList.remove("show", "open", "match", "disabled");
//     }
// //CARDS

// // scritps.js

// const cards = document.querySelectorAll('.card');

// let hasFlippedCard = false;
// let lockBoard = false;
// let [firstCard, ], secondCard;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   this.classList.add('flip');

//   if (!hasFlippedCard) {
//     hasFlippedCard = true;
//     firstCard = this;
//     return;
//   }

//   secondCard = this;
//   lockBoard = true;

//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
//   isMatch ? disableCards() : unflipCards();
// }

// function disableCards() {
//   firstCard.removeEventListener('click', flipCard);
//   secondCard.removeEventListener('click', flipCard);

//   resetBoard();
// }

// function unflipCards() {
//   setTimeout(() => {
//     firstCard.classList.remove('flip');
//     secondCard.classList.remove('flip');

//     resetBoard();
//   }, 1500);
// }

// function resetBoard() {
//   [hasFlippedCard, lockBoard] = [false, false];
//   [firstCard, secondCard] = [null, null];
// }

// (function shuffle() {
//  cards.forEach(card => {
//    let ramdomPos = Math.floor(Math.random() * 12);
//    card.style.order = ramdomPos;
//  });
// })();

// cards.forEach(card => card.addEventListener('click', flipCard));

// //MOVES

//   // reset moves
//   moves = 0;
//   counter.innerHTML = moves;
 


// //SCORE or CORRECT RIGHT

// //SHUFFLE

