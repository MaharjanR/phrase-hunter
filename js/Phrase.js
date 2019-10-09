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
        const buttonLi = document.querySelectorAll('#qwerty button');
        let letterFound = false;

        for( let i = 0; i < phraseLi.length; i++){
            if(letter === phraseLi[i].innerHTML){
                this.showMatchedLetter(phraseLi[i]);
                letterFound = true;
            }
        }

        // looping through the buttons and disabling them accordingly based on the letter found in the phrase or not
        for( let i = 0; i < buttonLi.length; i++){
            if(!letterFound){
                if(letter === buttonLi[i].innerHTML){
                    buttonLi[i].className = 'wrong';
                    buttonLi[i].setAttribute('disabled', true);
                    game.removeLife();
    
                }
            }
            else{
                if(letter === buttonLi[i].innerHTML){
                    buttonLi[i].className = 'chosen';
                    buttonLi[i].setAttribute('disabled', true);
                }
            }
           
        }
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        letter.className = 'show';   
    };
 }

