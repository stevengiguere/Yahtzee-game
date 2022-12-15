const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");



mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yahtzeeGame');

const Schema = mongoose.Schema;
const model = mongoose.model;



// All Data Types available for mongoose schemas
//
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
// Decimal128
// Map

//Player Schema
const Players = new Schema({
    name: {
        type: String,
        required: true
    },
    currentScore: Number,
    gamePlayed: Number, //Number of game played
    highestScore: Number,
    totalWins: Number,
    totalLoses: Number
});

//Collection : players
const Player = model('Player', Players);

//TESTING DATA ENTRY IN DB
const steven = new Player({
    name: 'Steven', // Input in the creation of a player
    currentScore: 0,
    gamePlayed: 0,
    highestScore: 0,
    totalWins: 0,
    totalLoses: 0
});

//CREATING PLAYER EXAMPLE
//adding the player to the database (comment this to avoid cloned data)
// steven.save((err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("yeah it work!");

//     //saved!!
// });

//SHOW all PLAYERS EXAMPLE in an array of objects
Player.find((error, players) => {
    console.log(players);
})

/************************************************************/


//including functions for Yahtzee Rules
const rules = require("./rules.js");


// Roll test
const playerHand = [4, 2, 3, 2, 2];

// Choose first section example here : 5
// Replace with the input later on in the home page


// console.log(rules.faces(playerHand, 1));
// console.log(rules.faces(playerHand, 2));
// console.log(rules.faces(playerHand, 3));
// console.log(rules.faces(playerHand, 4));
// console.log(rules.faces(playerHand, 5));
// console.log(rules.faces(playerHand, 6));
console.log(rules.allOfAKind(playerHand, 4));
// rules.yahtzee(playerHand, true);

/************************************************************/

//initialize the server
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));




//Generating routes
app.get('/', (req, res) => {

    //home page
    res.render('home');

    // req.body.dice1
    // req.body.dice2
    // req.body.dice3
    // req.body.dice4
    // req.body.dice5

});


//POSTS

//MONITORING
app.listen(3000, function () {
    console.log("Server started on port 3000");
});