
const gameMechanics = (() => {

let playerName;
let dataQuote;
let quoteArr;
let guessQuote = [];
const guessPattern = /^[a-zA-Z]/
let usedChars = [];
let wrongGuess = 0;

const gameTimer = new GameTimer();


const initPlayerName = () => {
    playerName = userInterface.nameForm.playerName.value.trim()
    return playerName}

const initializeQuote = () => {
    
    hangmanData.getQuoteData()
    .then(data => updateQuote(data))
    .catch(err => console.log(err));

    const updateQuote = data => {
        dataQuote = data
        generateQuote(dataQuote.content);
        userInterface.displayQuoteStr(guessQuote.join(" "))
        uniqueCharCount();
        gameTimer.startTicking();
    }

    const generateQuote = quote => {
        if (guessQuote != []) {
            guessQuote = []
        }

        quoteArr = quote.split("").map(char => {
            if (char == " ") {
                return "&nbsp;"
            }
            else {
                return char
            }
        })

        guessQuote = quoteArr.map(char => {
            if (guessPattern.test(char)) {
                return "__"
            }
            else {
                return char
            }
        })
        
    }
    
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

const checkGameOver = () => {
    if (quoteArr.toString() === guessQuote.toString()) {
        gameTimer.stopTicking();        
        hangmanData.sendHighscoreData(dataQuote._id, dataQuote.length, uniqueChars, playerName, wrongGuess,gameTimer.elapsedTime)
        userInterface.showAnswer(dataQuote.content)
        userInterface.displayInputError("");
        userInterface.displayHighscores();
    }
}

        
const checkGuess = guess => {
    if (quoteArr.find(char => char.toLowerCase() === guess.toLowerCase())) {
        quoteArr.forEach((char, index) => {
            if(guess.toLowerCase() === char.toLowerCase()) {
            guessQuote[index] = char;
            userInterface.displayQuoteStr(guessQuote.join(" "));
            userInterface.displayInputError("")
            checkGameOver();
            }
        })

    } 
    else {
        wrongGuess += 1
        userInterface.displayNumError(wrongGuess)
        userInterface.displayInputError("wrongGuess")
    }
    usedChars.push(guess.toLowerCase())
    userInterface.displayUsedChar(usedChars.join(", "));
    
}

const checkUsedChar = (char) =>  usedChars.includes(char.toLowerCase())

const checkIfLetter = char => guessPattern.test(char)


const resetGame = () => {
    wrongGuess = 0;
    usedChars = [];
    initializeQuote();


}
    
return {
    initPlayerName,
    initializeQuote,
    checkGuess,
    resetGame,
    checkUsedChar,
    checkIfLetter
}
})();





