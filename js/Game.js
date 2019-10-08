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
            if(li[i].className !== 'show' && li[i].className !== 'space'){
                wordsLeft++;
            }
        }

        console.log(wordsLeft);
        if(wordsLeft === 0){
            return true;
        }
        else {
            return false;
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

        this.missed++;

        const heartLi = document.querySelectorAll('ol img');
        let totalHealth = heartLi.length;
        console.log(totalHealth);

        for(let i = 0; i < heartLi.length; i++){

            if(heartLi[i].getAttribute('src') == 'images/liveHeart.png'){

                heartLi[i].src = 'images/lostHeart.png';
                totalHealth--;
                console.log(totalHealth);
                return;
            }
        }

        if(totalHealth == 0){
            console.log('game lost');
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {

    };

}
