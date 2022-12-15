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

// 4-of-a-kind
function allOfAKind(dices, number) {

    const sortedHand = dices.sort();

    //number of same dice of a kind (3 or 4) // for later, we will be able to add more dices
    for (i = 0; i < ((dices.length + 1) - number); i++) {
        if (sortedHand[i] === sortedHand[i + 1] && sortedHand[i] === sortedHand[i + 2]) {

            //Return the total value of dices
            return dices.reduce((a, b) => a + b);
        }
    }
    console.log("you didn't get enough number of a kind (at least 3 or 4) ");
    return 0;

}
// fullhouse (3-of-a-kind + pair)
// 
// 
// low straight
// 
// high straight
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