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
        const phraseLength = activePhrase.length;

        // lopping through the phrase and assigning each words to li with the class and appending it in the HTML
        for(let i = 0; i < phraseLength; i++){
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

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {

        const phraseLi = document.querySelectorAll('#phrase ul li'); 

        for( let i = 0; i < phraseLi.length; i++){
            if(letter === phraseLi[i].innerHTML){
                return true;
            }
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {

        const phraseLi = document.querySelectorAll('#phrase ul li'); 

        for( let i = 0; i < phraseLi.length; i++){
            if(letter === phraseLi[i].innerHTML){
                phraseLi[i].className = 'show';
            }
        }
    };
 }

