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
        // const phrase = [
        //     'Life is like a box of choclates',
        //     'Work hard play hard',
        //     'You wont go anywhere without taking a first step',
        //     'You are your own god',
        //     'How you doing'
        // ]

        let phrase = [];

        const phraseArr = [
            phrase = new Phrase('Life is like a box of choclates'),
            phrase = new Phrase('Work hard play hard'),
            phrase = new Phrase('You wont go anywhere without taking a first step'),
            phrase = new Phrase('You are your own god'),
            phrase = new Phrase('How you doing')
        ]

        console.log(phraseArr);
        return phrase;
    }

    /**
     * selects random phrase form the phrases property
     * @returns {object} Phrase objects chose to be used
     */
    // getRandomPhrase(){

    //     let randomNum = Math.floor(Math.random() * this.phrases.length + 1);
        
    //     let randomPhrase = this.phrases[randomNum];

    //     return randomPhrase;
    // }
}
