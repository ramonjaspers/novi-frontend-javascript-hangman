const { question } = require("readline-sync");
const { getGuessProgress, isGameLost, isGameWon, isGuessValid, drawHangman } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: \n ", JSON.stringify(guesses));
  const letter = question("Raad een letter: ").toLowerCase();

  // Check if the given letter is valid, if not we log a message and restart the round
  if (!isGuessValid(guesses, letter)) {
    return game(word, guesses);
  }

  // Add the guessed letter to the array of guesses
  guesses.push(letter);

  const voortgang = getGuessProgress(word, guesses);
  // Check if the game is finished
  const isGamelost = isGameLost(word, guesses);
  if (!isGamelost && isGameWon(word, guesses)) {
    console.log(`!!!Hoera Je hebt het woord: ${word} geraden!!!!`);
    return;
  } else if (isGamelost) {
    console.log(` 
    __________  
    | /     |   
    |/     _o_    
    |       O    
    |      / \\   
    |             
    ===========  
    R.I.P. je bent dood man 
`);
    //ends the function
    return;
  }

  // De ronde is nog niet voorbij dus tonen de de voortgang en roepen de game nog een keer aan voor 
  console.log(`Dit  is je voortgang: ${voortgang}`);
  //toond de huidige status van de hangende man
  drawHangman(word, guesses);

  return game(word, guesses);
};

console.log(`
__________  
| /     |     ░░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗░
|/     _o_    ░██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝░
|       O     ░██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░░
|      / \\    ░██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░░
|             ░╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗░
===========   ░░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝░
`);

game("javascript", []);
