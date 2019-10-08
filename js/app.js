/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.querySelector('#btn__reset').addEventListener('click', function(){

    game = new Game;
    game.startGame();
});

document.querySelector('#qwerty').addEventListener('click', function(e){
    let letter = e.target.innerHTML;
    let clicked = e.target.tagName;
    
    if(clicked === 'BUTTON'){
        game.handleInteractions(letter);
    }
});
