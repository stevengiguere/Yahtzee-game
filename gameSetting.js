const rules = require(".rules.js");

function standardGame(players) {

    const dices = 5; //set of 5 dices
    const faces = 6; //regular dice
    const rolls = 3; //3 rolls each turn
    const players = {
        name: String,
        currentScore: Number,
    };
    scoreboard = [players];



    console.log();

}

function endGame() {

    //When all the fields as been filled for a player
    //Calculate total point of first and second section.

    //Push the final score to the player DB

    //if finalScore > player.highestScore, update the player DB 

}

module.exports = {
    standardGame
};