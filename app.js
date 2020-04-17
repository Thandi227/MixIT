
//SCORE
//What do I want to do: I want to be able to have the score increase each time an item is droped into the bowl.
//Span ID name is "bowl";  this span ID name is the same for section CLASS "cpuScore" and "userScore"















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




//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GAME OVER
//What do I want to do: Alert that they've run out of time and the game is over. 

function gameOver (){
    alert('Time is Up. The Game Is Over!');
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------










