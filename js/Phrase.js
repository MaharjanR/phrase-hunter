/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{

    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on the game board
     */
    addPhraseToDisplay(){
        
        // getting phrases randomly and assigning ul element of phrase id from HTML
        const activePhrase = game.activePhrase.phrase;
        const phraseUl = document.querySelector('#phrase ul');

        // lopping through the phrase and assigning each words to li with the class amd appending it in the HTML
        for(let i = 0; i < activePhrase.length; i++){
            const letter = activePhrase.charAt(i);
            const phraseLi = document.createElement('li');

            phraseLi.innerHTML = letter;

            if(letter !== ' '){
                phraseLi.className = `hide letter ${letter}`;
            }
            else{
                phraseLi.className = 'space';
            }

            phraseUl.append(phraseLi);
        }
    }
 }

