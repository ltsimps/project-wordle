import React from 'react';
import GuessSlot from '../guessSlot/guessSlot';

function Guess() {
   const [word, setWord] = React.useState('');
   const [guesses, setGuesses] = React.useState([]);

   function handleSubmit(event) {

    event.preventDefault();
    console.log(word);
    setGuesses([...guesses, word]);
    console.log(guesses);
    setWord('');

    

   }

  return(
    <div> 
    <h2>Guess the word:</h2>

    { guesses.length > 0 ?  <GuessSlot guesses={guesses} /> :  <GuessSlot />   }


    
    <form className="guess-input-wrapper" onSubmit={ handleSubmit}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id={crypto.randomUUID()} type="text" value={word} onChange={(event) => setWord(event.target.value)} />
</form>
{/* <ul>
  {guesses.map((guess, index) => {
    return <li key={index}>{guess}</li>
  }
  )}  
</ul> */}
    </div>
    
    
    
    )
}

export default Guess;
