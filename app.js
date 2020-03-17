
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

document.getElementsByClassName("roundEasy").addEventListner("click",threeMinutes);

jQuery(function ($) {
    let oneMinute = 60 * 1,
        display = $('.mediumLevel');
    startTimer(oneMinute, display);
});

document.getElementsByClassName("roundMedium").addEventListner("click", oneMinute);

jQuery(function ($) {
    let thirtySeconds = 60 * .5,
        display = $('.hardLevel');
    startTimer(thirtySeconds, display);
});

document.getElementsByClassName("roundHard").addEventListner("click", thirtySeconds);





//BUTTONS
// I added "addEventListener" to the my element so that when a user clicks a button an action occurs













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

