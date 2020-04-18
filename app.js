

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//DRAG & DROP
//What do I want to do: I want to be able to drag my cards into my bowl and I want them to disappear. 
//Used Data

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

//Citation:https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//Citation: https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData 


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GAME OVER
//What do I want to do: Alert that they've run out of time and the game is over. 

function gameOver (){
    alert('Time is Up. The Game Is Over!');
}

//Citation For Code: https://www.w3schools.com/jsref/met_win_alert.asp
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

