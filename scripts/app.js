const userInterface = new UserInterface();
const hangmanData = new HangmanData();
const hangmanDraw = new HangmanDraw(userInterface.displayCanvas)

userInterface.gameReset.addEventListener("click", () => {
    gameMechanics.resetGame();
    userInterface.resetGameUI();
})


userInterface.nameForm.addEventListener("submit", e => {
    e.preventDefault();
  
    if (userInterface.nameForm.playerName.value != ""){
        gameMechanics.initializeQuote();
        userInterface.initGameUI();
        hangmanDraw.drawGallows();
    }
     else {
        alert("Please enter a name")
    }
})

userInterface.guessInput.addEventListener("submit", e => {
    let guessValue = userInterface.guessInput.charInput.value
    e.preventDefault();
    if (!gameMechanics.checkIfLetter(guessValue))
    {
        userInterface.displayInputError("alphabetOnly")
    }
    else if(gameMechanics.checkUsedChar(guessValue))
    {   
        userInterface.displayInputError("alreadyUsed")
    }
    else {
        gameMechanics.checkGuess(guessValue)
    }
    userInterface.guessInput.reset();


})
