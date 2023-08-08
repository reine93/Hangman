# Hangman

About the Game
This is a classic Hangman game but instead of guessing a word, player is expected to guess a quote from a famous person.
If game is reset or page is refreshed, a new quote will be generated.
It is coded in pure JS

Gameplay
Upon starting the game, you will be propmted for player name. After you enter your name, game starts.
You will be presented by empty "gallow" and a series of underscores representing the letters in the hidden quote.
You can start guessing letters one by one. If the guessed letter is in the quote, it will be revealed in its correct position(s).
Only English alphabet letters are accepted.
If the guessed letter is not in the quote, a part of the hangman figure will be drawn.
Keep guessing until you either guess the quote correctly (win) or the hangman figure is completely drawn and you got your guess wrong 6 times(lose).
If you win, your score is sent and highscore table is displayed. Score is calculated as (100/1+(number of errors))


Additional:
Quotes are pulled from https://api.quotable.io/ (https://github.com/lukePeavey/quotable)