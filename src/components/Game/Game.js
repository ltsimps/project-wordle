import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../guess/guess';
import GuessSlot from '../guessSlot/guessSlot';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <div>
    <Guess />
  
   </div>
   
}

export default Game;
