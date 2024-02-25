import React from 'react';

function Guess() {
   const [word, setWord] = React.useState('');
   const [guesses, setGuesses] = React.useState([]);



  return(
    <div> 
    <h2>Guess the word:</h2>

  
    
    <form className="guess-input-wrapper" onSubmit={(event) => {
  event.preventDefault();
  console.log(word);
  setGuesses([...guesses, word]);
  console.log(guesses);
  setWord('');
}}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" value={word} onChange={(event) => setWord(event.target.value)} />
</form>


<ul>
  {guesses.map((guess, index) => {
    return <li key={index}>{guess}</li>
  }
  )}  
</ul>
    </div>)
}

export default Guess;
