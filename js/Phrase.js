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

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {

        const phraseLi = document.querySelectorAll('#phrase ul li');
        console.log(phraseLi.length);

        for( let i = 0; i < phraseLi.length; i++){
            if(letter === phraseLi[i].innerHTML){
                this.showMatchedLetter(phraseLi[i]);
            }
        }
      
        
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {

        console.log(letter);
        const buttonLi = document.querySelectorAll('#qwerty button');

        letter.className = 'show';   

        for( let i = 0; i < buttonLi.length; i++){
            if(letter.innerHTML === buttonLi[i].innerHTML){
                console.log(buttonLi[i]);
                buttonLi[i].className = 'chosen';
                buttonLi[i].setAttribute('disabled', true);

            }
        }
    };
 }

