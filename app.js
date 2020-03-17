let cards = document.querySelectorAll('.card')
function flipCard(){
    this.classList.toggle('flip')
}


//Timer

let second = 0, minute = 0; hour = 0;
let timer = document.querySelector(".timer");
let interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}
// I added "addEventListener" to the my element so that when a user clicks a button an action occurs

document.getElementsByClassName("roundEasy").addEventListner("click",levelEasy);
document.getElementsByClassName("roundMedium").addEventListner("click", levelMedium);
document.getElementsByClassName("roundHard").addEventListner("click", levelHard);

// Below are the functions for each level

function levelEasy() {
    
  }

function levelMedium() {
    
}

function levelHard() {
    
}