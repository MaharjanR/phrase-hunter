/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const phrase = new Phrase('Life is like a box of choclates');

game.phrases.forEach( (phrase, index) => {

    console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});

// const logPhrases = (phrase) => {
//     console.log(`Phrase - phrase: `,phrase.phrase);
// }

// game.getRandomPhrase();