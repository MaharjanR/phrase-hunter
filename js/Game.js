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

    handleInteractions(){

        console.log(this.activePhrase);
        document.querySelector('.keyrow').addEventListener('click', function(e){
            let letter = e.target.innerHTML;
            console.log(letter);

            this.activePhrase.checkLetter(letter);
        });
    }
}
