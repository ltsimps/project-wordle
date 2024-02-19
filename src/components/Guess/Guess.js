import React from 'react';

function Guess() {
   const [word, setWord] = React.useState('');


  return(
    <div> 
    <h2>Guess the word:</h2>
   <form className="guess-input-wrapper" onSubmit={()=> {
    event.preventDefault();
    console.log(word);
    setWord('');

   }}>
  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input" type="text" value={word} onChange={setWord(event.target.value)} />
</form>
    </div>)
}

export default Guess;
