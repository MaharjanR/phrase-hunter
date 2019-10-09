/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{

    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }

    /**
     * Creates phrases used in the game
     * @returns {Array} An array of phrase that could be used in the game
     */
    createPhrase(){

        const phraseArr = [
            new Phrase('Life is like a box of choclates'),
            new Phrase('Work hard play hard'),
            new Phrase('You wont go anywhere without taking a first step'),
            new Phrase('You are your own god'),
            new Phrase('How you doing')
        ]
        
        return phraseArr;
    }

    /**
     * selects random phrase form the phrases property
     * @returns {object} Phrase objects chose to be used
     */
    getRandomPhrase(){

        let randomNum = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[randomNum];
        
        return randomPhrase;
    }

    /**
     * Begins the game by selecting random phrase and displaying it to the user
     */
    startGame(){
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteractions(letter){

        this.activePhrase.checkLetter(letter);
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin(){

        const li = document.querySelectorAll('#phrase ul li');
        let wordsLeft = 0;
        
        for( let i = 0; i < li.length; i++){
            // checking to see is there any words left to display on the phrase, if there is the wordsLeft increases
            if(li[i].className !== 'show' && li[i].className !== 'space'){
                wordsLeft++;
            }
        }

        // once there is no wordleft on the phrase, game is won so gaveOver is called
        if(wordsLeft === 0){
            this.gameOver(true);
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

        this.missed++;
        console.log(this.missed);
        const heartLi = document.querySelectorAll('ol img');

        if(this.missed === 5){
            const overlay = document.querySelector('#overlay');
            overlay.style.display = 'flex';
            const gameOver = document.querySelector('#game-over-message');
            gameOver.innerHTML = 'Sorry, Better luck next time!';
        }
        for(let i = 0; i < heartLi.length; i++){

            if(heartLi[i].getAttribute('src') == 'images/liveHeart.png'){

                heartLi[i].src = 'images/lostHeart.png';
                return;
            }
            
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if(gameWon){
            
            // After the game is won, overlay is brought back to display it
            const overlay = document.querySelector('#overlay');
            overlay.style.display = 'flex';
            const gameOver = document.querySelector('#game-over-message');
            gameOver.innerHTML = 'Great Job';
        }
    };

}
