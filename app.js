
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

