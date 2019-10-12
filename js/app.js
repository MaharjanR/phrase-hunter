/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// starts a new game when the start game button is pressed
document.querySelector('#btn__reset').addEventListener('click', function(){

    game = new Game;
    game.startGame();
});

// runs when the button key is pressed
document.querySelector('#qwerty').addEventListener('click', function(e){
    let letter = e.target.innerHTML;
    let clicked = e.target.tagName;
    
    if(clicked === 'BUTTON'){
        game.handleInteractions(letter);
    }
});

document.querySelector('body').addEventListener('keyup', function(e){

    // checks if the overlay is hidden or not and if is hidden then only it runs
    if(document.querySelector('#overlay').style.display == 'none'){

        const alphabet = e.key.toLocaleLowerCase();
        game.handleInteractions(alphabet);
    }

});