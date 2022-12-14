const express = require("express"); //checked
const bodyParser = require("body-parser"); //checked
const ejs = require("ejs"); //checked
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

//Player model
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


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "public"));




//Generating routes
app.get('/', (req, res) => {

    //home page
    res.render('home');

});


//POSTS

//MONITORING
app.listen(3000, function () {
    console.log("Server started on port 3000");
});