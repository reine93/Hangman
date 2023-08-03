const gameMechanics = (() => {
//these can't be manipulated from outside / through console (unless prompted)
let playerName;
let dataQuote;
let quoteArr;
let guessQuote = [];
const guessPattern = /^[a-zA-Z]/
let usedChars = [];
let wrongGuess = 0;
const gameTimer = new GameTimer();

//store player name in playerName var and return it
const initPlayerName = () => {
    playerName = userInterface.nameForm.playerName.value.trim()
    return playerName}


const initializeQuote = () => {
    //fetches quote data
    hangmanData.getQuoteData()
    .then(data => updateQuote(data))
    .catch(err => console.log(err));

    //stores quote data to dataQuote var, generates and displays str with __ in place of letters
    //stores num of unique letters of quote to uniqueChars
    //starts game timer
    const updateQuote = data => {
        dataQuote = data
        generateQuote(dataQuote.content);
        userInterface.displayQuoteStr(guessQuote.join(" "))
        uniqueCharCount();
        gameTimer.startTicking();
    }

    const generateQuote = quote => {
        //empty previous guess array if not empty
        if (guessQuote != []) {
            guessQuote = []
        }
        //generate array from quote data
        quoteArr = quote.split("").map(char => {
            if (char == " ") {
                return "&nbsp;" //returns space
            }
            else {
                return char
            }
        })
        //generate guess array (with __ instead of letters) from quote array
        guessQuote = quoteArr.map(char => {
            if (guessPattern.test(char)) {
                return "__" //returns ___ if letter
            }
            else {
                return char //displays other chars 
            }
        })
        
    }
    
    //counts number of unique letters (and only letters) in quote array, case insensitive
    const uniqueCharCount = () => {
        const uniq = [];
        quoteArr.forEach(char => {
            if (!uniq.includes(char.toLowerCase()) && guessPattern.test(char)) {
                uniq.push(char.toLowerCase())
            }
        })
        uniqueChars = uniq.length
    }
}

//checks if user has guessed all letters, stops game, sends and display highscores
const checkGameOver = () => {
    if (quoteArr.toString() === guessQuote.toString()) {
        gameTimer.stopTicking();        
        hangmanData.sendHighscoreData(dataQuote._id, dataQuote.length, uniqueChars, playerName, wrongGuess,gameTimer.elapsedTime)
        userInterface.showAnswer(dataQuote.content)
        userInterface.displayHighscores();
    }
}

//checks guess        
const checkGuess = guess => {
    if (quoteArr.find(char => char.toLowerCase() === guess.toLowerCase())) { //if guess letter is in quote arr, case insensitive
        quoteArr.forEach((char, index) => {
            if(guess.toLowerCase() === char.toLowerCase()) { //find each letter
            guessQuote[index] = char; //display it on guess arr
            userInterface.displayQuoteStr(guessQuote.join(" "));
            userInterface.displayInputError("") //remove input error if present
            checkGameOver(); //check if user has guessed all letters
            }
        })

    } 
    else { //if not then increment and display num of wrong guesses, draw hangman part
        wrongGuess += 1
        userInterface.displayNumError(wrongGuess) 
        userInterface.displayInputError("wrongGuess")
        hangmanDraw.drawHangman(wrongGuess)
        //if 6 errors(entire hangman) then game over
        if (wrongGuess >= 6) {
            gameTimer.stopTicking();
            userInterface.displayGameOver();
        }
    }
    //any guess char gets pushed to usedChars array and displayed
    usedChars.push(guess.toLowerCase())
    userInterface.displayUsedChar(usedChars.join(", "));
    
}
//checks if guess char has been used
const checkUsedChar = (char) =>  usedChars.includes(char.toLowerCase())
//check if guess char is letter
const checkIfLetter = char => guessPattern.test(char)

//resets game, reinitializes quote, removes hangman from gallows
const resetGame = () => {
    wrongGuess = 0;
    usedChars = [];
    initializeQuote();
    hangmanDraw.freeHangman();
}
    
return { //public functions
    initPlayerName,
    initializeQuote,
    checkGuess,
    resetGame,
    checkUsedChar,
    checkIfLetter
}
})();





