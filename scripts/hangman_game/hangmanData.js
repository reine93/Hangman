class HangmanData {
    constructor() {
        this.getQuoteUrl = `http://api.quotable.io/random`;  //fetch quote URL
        this.maxLength = 30; //defined max char length for quote URL
        this.highscoresURL = "https://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores" //fetch and post url for highscore data
    }

    //fetches and returns quote data
    async getQuoteData() {
        const quote = `${this.getQuoteUrl}?maxLength=${this.maxLength}`
        const response = await fetch(quote);
        if(response.status !== 200){
            throw new Error("Cannot fetch quote");
        }
        const data = await response.json();
        return data
    }
    //sends score data
    async sendHighscoreData (quoteId, length, uniqueCharacters, userName, errors, duration) {
        const response = await fetch (this.highscoresURL, {
            method: "POST",
            body: JSON.stringify({
                quoteId,
                length,
                uniqueCharacters,
                userName,
                errors,
                duration
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
    
        if (response.status !== 201) {
            throw new Error(`Failed to send highscore data. Status: ${response.status} ${response.statusText}`);
        }
    
    }
        //fetches highscore data
    async getHighscoreData () {
        const response = await fetch(this.highscoresURL);
        if(response.status !== 200){
            throw new Error("Cannot fetch highscore data");
        }
        const highscores = await response.json();
        return highscores
    }

    }

