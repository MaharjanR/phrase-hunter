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

    /**
     * checks the letter if its in the phrases or not act accordingly
     * @param {string} letter alphabets pressed or clicked by the user
     */
    handleInteractions(letter){
        const letterFound = this.activePhrase.checkLetter(letter);    
        const buttonLi = document.querySelectorAll('#qwerty button');

        // looping through the buttons and disabling them accordingly based on the letter found in the phrase or not
        for( let i = 0; i < buttonLi.length; i++){
            if(!letterFound){
                if(letter === buttonLi[i].innerHTML){
                    buttonLi[i].className = 'wrong';
                    buttonLi[i].setAttribute('disabled', true);
                    game.removeLife();
                    game.checkForWin();    
                }
            }
            else{
                this.activePhrase.showMatchedLetter(letter); 
                if(letter === buttonLi[i].innerHTML){
                    buttonLi[i].className = 'chosen';
                    buttonLi[i].setAttribute('disabled', true);
                    game.checkForWin();
                }
            }
           
        }
        
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
        else{
            this.gameOver(false);        }

    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

        this.missed++;
        const heartLi = document.querySelectorAll('ol img');

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
            overlay.className = 'win'
            const gameOver = document.querySelector('#game-over-message');
            gameOver.innerHTML = 'Great Job';
            game.reset();
        }
        else{
            const heartLi = document.querySelectorAll('ol img');

            if(this.missed === 5){
                const overlay = document.querySelector('#overlay');
                overlay.style.display = 'flex';
                overlay.className = 'lose'
                const gameOver = document.querySelector('#game-over-message');
                gameOver.innerHTML = 'Sorry, Better luck next time!';
                heartLi[4].src = 'images/lostHeart.png';
                game.reset();
                return;
            }
        }
    };

    /**
     * Resets all the button pressed and remove the phrases once the game is won/lost
     */
    reset(){

        const li = document.querySelectorAll('#phrase li');
        const key = document.querySelectorAll('#qwerty button');
        const heartLi = document.querySelectorAll('ol img');

        for(let i = 0; i < li.length; i++){
            li[i].parentNode.removeChild(li[i]);
        }

        for(let i = 0; i < key.length; i++){
            key[i].className = 'key';
            key[i].removeAttribute('disabled');
        }

        for(let i = 0; i < heartLi.length; i++){
            heartLi[i].src = 'images/liveHeart.png';
        }
    }

}
