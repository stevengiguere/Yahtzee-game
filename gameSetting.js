const rules = require("./rules.js");

function standardGame(players) {

    const diceSet = {
        dices: 5,
        faces: 6
    };

    const rolls = 3; //3 rolls each turn
    const player = {
        name: String,
        currentScore: Number,
    };

    for (i = 0; i < 6; i++)
        diceSet.push(6)
    scoreboard = [players,
        rules.faces(diceSet),
    ];

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