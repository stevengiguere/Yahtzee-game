const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

//including functions for Yahtzee Rules
const rules = require("./rules.js");
const setting = require("./gameSetting.js");
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/yahtzeeGame');

const Schema = mongoose.Schema;
const model = mongoose.model;

const newGame = [];

//initialize the server
const app = express();
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

const allPlayers = [];

//Database settings
//=================================================
//Creating a Schema
const Players = new Schema({
    name: {
        type: String,
        required: true
    },
    gamePlayed: Number, //Number of game played
    highestScore: Number,
    totalWins: Number,
    totalLoses: Number,
    totalBonus: Number,
    totalYahtzees: Number
});

//Collection : players
const Player = model('Player', Players);

//=================================================
//Database settings


//Generating routes
app.get('/', (req, res) => {

    Player.find({}, (err, allPlayers) => {
        if (err) console.log(err);

        console.log(allPlayers.name);

        //home page
        res.render('home', {
            allPlayers: allPlayers
        });


    })

});

app.get('/newGame', (req, res) => {

    res.render('yahtzeeGame', {
        thisplayer: newGame
    });

    // req.body.dice1
    // req.body.dice2
    // req.body.dice3
    // req.body.dice4
    // req.body.dice5

});



//POSTS
app.post('/createPlayer', (req, res) => {

    const playerName = req.body.playerName;

    //Creating an object
    const player = new Player({
        name: playerName, // Input in the creation of a player
        currentScore: 0,
        gamePlayed: 0,
        highestScore: 0,
        totalWins: 0,
        totalLoses: 0,
        totalBonus: 0,
        totalYahtzees: 0
    });


    //Adding the player to the database
    player.save((err) => {
        if (err)
            console.log(err);
        else
            console.log("Successfully added the new player");

        //saved!!
    });

    res.redirect('/');

});

app.post('/newGame', (req, res) => {


    //be sure that the array is empty
    while(newGame.length > 0) {
        newGame.pop();
    }


    const player = req.body.selectedPlayer;

    newGame.push(player);

    newGame.push(0,0,0,0,0,0,0,0,0,0,0,0,0,0);
    //button starting a regular game

    res.redirect('/newGame');


});


//MONITORING
app.listen(3000, function () {
    console.log("Server started on port 3000");
});