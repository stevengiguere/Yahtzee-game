const express = require("express"); //checked
const bodyParser = require("body-parser"); //checked
const ejs = require("ejs"); //checked
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/YahtzeeGame');
mongoose.set('strictQuery', false);



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
const playerSchema = new mongoose.Schema({
    name: String,
    gamePlayed: Number,
    highestScore: Number,
    totalWins: Number,
    totalLoses: Number
});

//Player model
const Player = mongoose.model('Player', playerSchema);


//
const player = new Player({
    name: 'Steven', // Input in the creation of a player
    gamePlayer: 0 //Number of game played
});

//adding the player to the database (comment this to avoid cloned data)
player.save((err) => {
    if (err)
        console.log(err);
    //saved!!
});


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