class UserInterface {
    constructor() { //element selectors
        this.gameDisplay = document.querySelector(".maingame-display");
        this.nameDisplay = document.querySelector(".player-name");
        this.errorDisplay = document.querySelector(".error-display");
        this.timeDisplay = document.querySelector(".game-timer");
        this.inputErrorDisplay = document.querySelector(".input-error-display");
        this.quoteDisplay = document.querySelector(".quote-display");
        this.usedCharDisplay = document.querySelector(".used-chars");
        this.highscoreDisplay = document.querySelector(".highscore-table");
        this.highscoreTable = document.querySelector("#HStable-rows");
        this.gameReset = document.querySelector("#reset-game");
        this.nameForm = document.querySelector(".name-input");
        this.guessInput = document.querySelector(".guess-input");
        this.displayCanvas = document.querySelector("#hangmanCanvas");
        this.gameOver = document.querySelector(".game-over")

    }

    initGameUI() { //hide name form, display char name and game display
        this.nameDisplay.innerHTML = `<span>Name: ${gameMechanics.initPlayerName()}</span>`;
        this.nameForm.style.display = "none";
        this.gameDisplay.style.display = "block";
    }

    resetGameUI() { //reset UI
        this.gameOver.style.display = "none";
        this.guessInput.style.display = "block";
        this.inputErrorDisplay.innerHTML = "";
        this.highscoreDisplay.style.display = "none";
        this.errorDisplay.innerHTML = `<p> Errors: 0 </p>`;
        this.usedCharDisplay.innerHTML = "";
    }

    displayGameOver() { //hide guess input and show game over instead
        this.guessInput.style.display = "none";
        this.gameOver.style.display = "block"
    }

    displayTime(time) { //display elapsed time in sec
        this.timeDisplay.innerHTML = `<p>Time elapsed: ${time} sec</p>`;
    }

    displayUsedChar(usedChar) { //display used chars
        this.usedCharDisplay.innerHTML = `<p>Used letters: ${usedChar}`;
    }

    displayQuoteStr(guessQuote) { //display guess quote
        this.quoteDisplay.innerHTML = `<p>Guess a saying!</p><p>${guessQuote}</p>`;

    }

    showAnswer(answer) { //show answer (data.content)
        this.guessInput.style.display = "none";
        this.quoteDisplay.innerHTML = `<p>The answer is:</p><p>${answer}</p>`;
    }

    displayInputError(errorType) { //errors for guess char input
        switch (errorType) {
            case 'alphabetOnly':
                this.inputErrorDisplay.innerHTML = "<p>Alphabet chars only</p>";
                break;
            case 'alreadyUsed':
                this.inputErrorDisplay.innerHTML = "<p>You already used this char</p>";
                break;
            case 'wrongGuess':
                this.inputErrorDisplay.innerHTML = "<p>Wrong guess!</p>";
                break;
            default:
                this.inputErrorDisplay.innerHTML = ""; // default case, clear the error display
        }
    }

    displayNumError(num) { //display num of errors
        this.errorDisplay.innerHTML = `<p> Errors: ${num} </p>`;
    }

    displayHighscores() { //fetch highscores, sort and display
        hangmanData.getHighscoreData()
            .then(highscore => this.sortHighscores(highscore))
            .catch(err => console.log(err));
    }

    sortHighscores(data) { //sorts fetched highscores
        let highScores;
        const calculateScore = (player) => {
            return (100 / (1 + player.errors)).toFixed(2); //score is calculated as 100 / (1 + num of errs)
        };
        highScores = data.map(player => ({ username: player.userName, score: calculateScore(player) }));
        highScores.sort((a, b) => b.score - a.score); //sorts from higher score to lower

        let tables = highScores.map(item => { //renders table
            return `
            <tr>
                <td>${item.username}</td>
                <td>${item.score}</td>
            </tr>
        `;
        }).join("");
        //displays table
        this.highscoreTable.innerHTML = tables;
        this.highscoreDisplay.style.display = "block";
    }
}
