const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

//including functions for Yahtzee Rules
const rules = require("./rules.js");

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yahtzeeGame');

const Schema = mongoose.Schema;
const model = mongoose.model;

//initialize the server
const app = express();
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

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
app.post('/', (req, res) => {


    //button starting a regular game

    const newGame = [];

    console
})

//MONITORING
app.listen(3000, function () {

    // ROLL TEST
    /************************************************************/
    let playerHand = [5, 5, 5, 5, 2];

    //three of a kind
    //rules.allOfAKind(playerHand, 3);

    //four of a kind
    //rules.allOfAKind(playerHand, 4);

    // Choose first section example here : 5
    // Replace with the input later on in the home page

    playerHand = [1, 1, 1, 5, 2];
    rules.faces(playerHand, 1);

    playerHand = [2, 2, 1, 5, 2];
    rules.faces(playerHand, 2);

    playerHand = [1, 3, 3, 5, 3];
    rules.faces(playerHand, 3);

    playerHand = [4, 4, 1, 4, 4];
    rules.faces(playerHand, 4);

    playerHand = [5, 5, 1, 5, 2];
    rules.faces(playerHand, 5);

    playerHand = [6, 1, 6, 6, 2];
    rules.faces(playerHand, 6);

    // rules.yahtzee(playerHand, true);

    /************************************************************/








    console.log("Server started on port 3000");
});