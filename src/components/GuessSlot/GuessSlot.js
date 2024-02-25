import React from 'react';

function GuessSlot( {guesses = []}) {

 function RenderClearBoard() { 
 
  return <><p class="guess">
   
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p>
  <p class="guess">
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
    <span class="cell"></span>
  </p> 
  </>

 }

  function returnGuesses() {
    if (guesses.length === 0) return RenderClearBoard();
    else 
    return guesses.map((guess, index) => {
      return <p key={index} class="guess">
        {guess.split('').map((letter, index) => {
          return <span key={index} class="cell">{letter}</span>
        })}
      </p>
    })
  }

  return  <div class="guess-results">

 {returnGuesses()}

</div>;
}

export default GuessSlot;
