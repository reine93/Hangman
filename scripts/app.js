const userInterface = new UserInterface(); //init UI
const hangmanData = new HangmanData(); //API calls
const hangmanDraw = new HangmanDraw(userInterface.displayCanvas) //init canvas

userInterface.gameReset.addEventListener("click", () => { //reset game if reset btn is clicked
    gameMechanics.resetGame();
})


userInterface.nameForm.addEventListener("submit", e => {
    e.preventDefault();
  
    if (userInterface.nameForm.playerName.value != ""){ //on submit if name not empty start game
        gameMechanics.initializeQuote();
        userInterface.initGameUI();
        hangmanDraw.drawGallows();
    }
     else {
        alert("Please enter a name")
    }
})

userInterface.guessInput.addEventListener("submit", e => { //on char submit
    e.preventDefault();
    let guessValue = userInterface.guessInput.charInput.value //guess char
    if (!gameMechanics.checkIfLetter(guessValue)) //if guess char not letter display error 
    {
        userInterface.displayInputError("alphabetOnly")
    }
    else if(gameMechanics.checkUsedChar(guessValue)) //if char already used display error
    {   
        userInterface.displayInputError("alreadyUsed")
    }
    else {
        gameMechanics.checkGuess(guessValue) //check if guess char correct
    }
    userInterface.guessInput.reset(); //clear input field


})
