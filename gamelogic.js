function getGuessProgress(word, guesses) {
  let progress = ''

  for (let i = 0; i < word.length; i++) {
    progress += (guesses.includes(word[i]) ? word[i] : '_') + ' ';
  }

  return progress
}

function isGameWon(word, guesses) {
  let progress = '';
  for (let i = 0; i < word.length; i++) {
    progress += (guesses.includes(word[i]) ? word[i] : '');
  }
  const complete = progress === word;
  if (complete) {
    return true;
  }
  return false;
}

function isGameLost(word, guesses) {
  if (getAmountOfInvalidtries(word, guesses) >= 7) {
    return true;
  }
  return false;
}

function isGuessValid(guesses, letter) {
  if (letter.length > 1) {
    console.log(`Helaas! Je hebt meer dan 1 letter gegeven, probeer het opnieuw!`);
    return false;
  }
  if (!letter.match(/[a-z]/i)) {
    console.log(`Helaas! De letter ${letter} is geen valide letter, probeer het opnieuw!`);
    return false;
  }
  if (guesses.includes(letter)) {
    console.log(`Helaas! De letter ${letter} is al geraden, probeer het opnieuw!`);
    return false;
  }
  return true;
}


function getAmountOfInvalidtries(word, guesses) {
  let tries = 0;
  for (let i = 0; i < guesses.length; i++) {
    word.includes(guesses[i]) ? null : tries++;
  }
  return tries;
}

function drawHangman(word, guesses) {
  switch (getAmountOfInvalidtries(word, guesses)) {
    case 1:
      console.log(`
      |
      | 
      |
      |
      |
      ===========
      `);
      break;
    case 2:
      console.log(`
      __________  
      |      
      |      
      |          
      |       
      |             
      ===========   
      `);
      break;
    case 3:
      console.log(`
      __________  
      | /       
      |/         
      |           
      |         
      |             
      ===========   
      `);
      break;
    case 4:
      console.log(`
      __________  
      | /     |   
      |/         
      |         
      |         
      |             
      ===========   

      `);
      break;
    case 5:
      console.log(`
      __________  
      | /     |   
      |/     _o_    
      |          
      |        
      |             
      ===========   

      `);
      break;
    case 6:
      console.log(`
      __________  
      | /     |   
      |/     _o_    
      |       O    
      |       
      |             
      ===========   

      `);
      break;
    default:
      //we always want a clean newline as seperator
      console.log(``);
      break;
  }
}

module.exports = {
  getGuessProgress,
  isGameWon,
  isGameLost,
  isGuessValid,
  getAmountOfInvalidtries,
  drawHangman,
};
