
const userInterface = new UserInterface();
const hangmanData = new HangmanData();

userInterface.gameReset.addEventListener("click", () => {
    gameMechanics.resetGame();
    userInterface.resetGameUI();
})


userInterface.nameForm.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.id =="submit-name") {
        if (userInterface.nameForm.playerName.value != ""){
            gameMechanics.initializeQuote();
            userInterface.initGameUI();
        }
         else {
            alert("Please enter a name")
         }
    }
})

userInterface.guessInput.addEventListener("click", e => {
    let guessValue = userInterface.guessInput.charInput.value
    e.preventDefault();
    if (e.target.id == "submit-guess") {
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
    }

})
