//functions of every Yahtzee rule(except for joker rule)

/******************************** */
// First Section
// 1 < function faces(dices, 1)
// 2 
// 3 
// 4
// 5
// 6
// Subtotal 
//
//
//
//
//
//
//
//
//
/******************************** */

//functions 
//
// 
//
// FIRST SECTION
// 
// Every dice where the dice.value === button.value (from 1-6)
let scoreFirstSection = 0;
let allfaces = 0;

function faces(dices, faceValue) {

    // result = [dice1.value, dice2.value, dice3.value, dice4.value, dice5.value];
    let score = 0;

    dices.forEach(diceValue => {
        if (diceValue === faceValue)
            score += faceValue;
    });

    console.log("You score " + score + " points in the " + faceValue);

    scoreFirstSection += score;
    allfaces++;

    if (allfaces != 6) {
        return score;
    }
    return score;
    subTotal;
}

function subTotal() {

    console.log("subtotal = " + scoreFirstSection);
    return scoreFirstSection;
}
// When 1st section fulfilled, if total of the first section >= 63, then subtotal + bonus 35pts

// SECOND SECTION need to [].sort
//

// 3 and 4-of-a-kind
function allOfAKind(dices, number) {

    const sortedDices = dices.sort();
    let isSameValue;
    //number of possibilities
    for (i = 0; i < ((dices.length + 1) - number); i++) {

        isSameValue = 1;

        //check if the value is the same for the 'number'OfAKind
        for (j = 0; j < (number - 1); j++)

            //Verify if every number are identicals
            if (sortedDices[i + j] === sortedDices[i + j + 1])
                isSameValue++;

        // After verification, return the total value of the dices
        if (isSameValue === number)
            return dices.reduce((a, b) => a + b);
    }
    console.log("you didn't get enough 'number'OfAKind");
    return 0;

}

// fullhouse (3-of-a-kind + pair)
function fullHouse(dices) {

    //if I have 3 different value, return 0

}

// low straight
function lowStraight(dices) {}

// high straight
function hiStraight(dices) {}

// YATHZEE (all of a kind)
function yahtzee(dices, haveOne) {
    for (i = 0; i < (dices.length - 1); i++) {
        if (dices[i] != dices[i + 1]) {
            return 0;
        }
    }
    if (haveOne === true)
        return 100;
    return 50;

}

module.exports = {
    faces,
    allOfAKind,
    yahtzee
};