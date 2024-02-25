// import React from 'react';

// function GuessSlot( {guesses = []}) {

//  function RenderClearBoard() { 
 
//   return <><p class="guess">
   
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//   </p>
//   <p class="guess">
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//   </p>
//   <p class="guess">
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//   </p>
//   <p class="guess">
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//   </p>
//   <p class="guess">
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//     <span class="cell"></span>
//   </p> 
//   </>

//  }

//   function returnGuesses() {
//     if (guesses.length === 0) return RenderClearBoard();
//     else 
//     return guesses.map((guess, index) => {
//       return (
//         <p key={index} class="guess">
//           {guess.split('').slice(0, 5).map((letter, index) => {
//             return <span key={index} class="cell">{letter}</span>
//           })}
//         </p>
//       )
//     }).slice(0, 6);
//   }

//   return (
//     <div class="guess-results">
//       {returnGuesses()}
//     </div>
//   );

// }

// export default GuessSlot;
import React from 'react';

function GuessSlot({ guesses = [] }) {
  const maxRows = 6;
  const maxColumns = 5;

  function RenderRow(guess = '') {
    // Fill the row with letters from the guess, and add empty spans for the remaining cells
    const cells = guess.split('').concat(Array(maxColumns - guess.length).fill(''));
    return (
      <p className="guess">
        {cells.map((letter, index) => (
          <span key={index} className="cell">{letter}</span>
        ))}
      </p>
    );
  }

  function RenderBoard() {
    const rows = [];

    // Fill the rows with guesses
    for (let i = 0; i < maxRows; i++) {
      rows.push(RenderRow(guesses[i]));
    }

    return rows;
  }

  return (
    <div className="guess-results">
      {RenderBoard()}
    </div>
  );
}

export default GuessSlot;
