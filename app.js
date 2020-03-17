

//TIMER

  let levelEasyTime = '00:03:00';


  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    return {
      'total': t,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeTimer(timer, endtime) {
    let timer = document.getElementsByClassName(timer);
    let minutesSpan = timer.querySelector('.minutes');
    let secondsSpan = timer.querySelector('.seconds');
  
    function updateTimer() {
      let t = getTimeRemaining(endtime);
  
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateTimer();
    let timeinterval = setInterval(updateTimer, 1000);
  }

  let levelEasyTime = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeTimer('timer', levelEasyTime);



