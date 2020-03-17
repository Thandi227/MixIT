
//TIMER




function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    let threeMinutes = 60 * 3,
        display = $('.easyLevel');
    startTimer(threeMinutes, display);
});

jQuery(function ($) {
    let oneMinute = 60 * 1,
        display = $('.mediumLevel');
    startTimer(oneMinute, display);
});

jQuery(function ($) {
    let thirtySeconds = 60 * .30,
        display = $('.hardLevel');
    startTimer(threeMinutes, display);
});

// let levelEasyTime = 'March 17 2020 00:03:00';
// console.log(levelEasyTime);
 
//Date.Parse has to have a date and time; you cant just have a time stand alone. An alternative to Date.Parse is moment. Here I created a string that represents a given end time  and calculates

// function getTimeRemaining(endtime) {
//   let timeLeft = Date.parse(endtime) - Date.parse(new Date());
//   let seconds = Math.floor((t / 1000) % 60);
//   let minutes = Math.floor((t / 1000 / 60) % 60);
//   return {
//     'total': timeLeft,
//     'minutes': minutes,
//     'seconds': seconds
//   };
// }
// console.log(getTimeRemaining);

// function initializeTimer(timer, endtime) {
//   let timer = document.getElementsByClassName(timer);
//   let minutesSpan = timer.querySelector('.minutes');
//   let secondsSpan = timer.querySelector('.seconds');

//   function updateTimer() {
//     let t = getTimeRemaining(endtime);

//     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateTimer();
//   let timeinterval = setInterval(updateTimer, 1000);
// }

// let levelEasyTime = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// initializeTimer('timer', levelEasyTime);






//BUTTONS
// I added "addEventListener" to the my element so that when a user clicks a button an action occurs

document.getElementsByClassName("roundEasy").addEventListner("click",levelEasyTime);
document.getElementsByClassName("roundMedium").addEventListner("click", levelMedium);
document.getElementsByClassName("roundHard").addEventListner("click", levelHard);









function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
}


//Cards
// cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card];

// deck of all cards in game for user and cpu
const cpuDeck = document.getElementById("cpuCardDeck");
const userDeck = document.getElementById("userCardDeck");

// declaring move variable
let moves = 0;
let counter = document.querySelector(".moves");

// declaring variable of matchedCards
let matchedCard = document.getElementsByClassName("match");

let openedCards = [];

//Fisher Yates Algorithim 
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      //Pick Random Index
      randomIndex = Math.floor(Math.random() * currentIndex);
      //Decrease counter by 1
      currentIndex --;
      //And swap the last element with it
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
};

//So, this should shuffle the cards when the page loads
document.body.onload = startGame();
  function startGame () {
      openedCards = [];
      cards = shuffle(cards);

      for (let i = 0; i < cards.length; i++){
          deck.innerHTML = "";
          [].forEach.call(cards, function(item) {
              deck.appendChild(item);
          });
          cards[i].classList.remove("show", "open", "match", "disabled");
      }
//Reset moves that are made
      moves = 0;
      counter.innerHTML = moves;
  } 

  let displayCard = function (){
      this.classList.toggle("flip");
      this.classList.toggle("show");
      this.classList.toggle("disabled");
  };

// Here is where we check to see if the cards have matched
  function cardOpen() {
      openedCards.push(this);
      let length = openedCards.length;
      if(length === 2){
          moveCounter();
          if(openedCards[0].type === openedCards[1].type){
              matched();
          } else {
              unmatched();
          }
      }
  };
//Here is where we show that the cards are matched
  function matched(){
      openedCards[0].classList.add("match", "disabled");
      openedCards[1].classList.add("match", "disabled");
      openedCards[0].classList.remove("show", "open", "no-event");
      openedCards[1].classList.remove("show", "open", "no-event");
      openedCards = [];
  }
//Here is where we show that the cards are unmatched
  function unmatched(){
      openedCards[0].classList.add("unmatched");
      openedCards[1].classList.add("unmatched");
      disable();
      setTimeout(function(){
          openedCards[0].classList.remove("show", "open", "no-event","unmatched");
          openedCards[1].classList.remove("show", "open", "no-event","unmatched");
          enable();
          openedCards = [];
      },1100);
  }
  
  function disable(){
      Array.prototype.filter.call(cards, function(card){
          card.classList.add('disabled');
      });
  }

  function enable(){
      Array.prototype.filter.call(cards, function(card){
          card.classList.remove('disabled');
          for(var i = 0; i < matchedCard.length; i++){
              matchedCard[i].classList.add("disabled");
          }
      });
  }

