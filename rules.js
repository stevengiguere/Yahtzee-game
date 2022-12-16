//functions of every Yahtzee rule(except for joker rule)

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

    if (allfaces > 6) return score;
    else {
        totalFirstSection();
        return score;
    }
}

function totalFirstSection() {



    if (scoreFirstSection >= 63) {
        console.log("you score more than 63pts, you earn a 35pts bonus")
        console.log("subtotal before bonus = " + scoreFirstSection);
        scoreFirstSection += 35;
        console.log("subtotal = " + scoreFirstSection);
    } else {
        console.log("subtotal = " + scoreFirstSection);
    }

    return scoreFirstSection;
}
// When 1st section fulfilled, if total of the first section >= 63, then subtotal + bonus 35pts

// SECOND SECTION
// (3 and 4-of-a-kind)
function allOfAKind(dices, number) {

    const sortedDices = dices.sort();

    //number of possibilities
    for (i = 0; i < ((dices.length + 1) - number); i++) {

        //check if the value is the same for the 'number'OfAKind
        for (j = 0; j < (number - 1); j++) {

            //if this dice different from next dice, go to next possibility
            if (sortedDices[i + j] != sortedDices[i + j + 1]) break;

            // After verification, return the total value of the dices
            if (number === (j + 2)) {
                const score = dices.reduce((a, b) => a + b);
                console.log("you get a " + number + " of a kind, congrats, you score " + score + "pts");
                return score;

            }
        }

    }
    console.log("you didn't get enough 'number'OfAKind, you score 0pts");
    return 0;

}

// fullhouse (3-of-a-kind + pair, only in 5 dices game)
function fullHouse(dices) {

    const sortedDices = dices.sort();

    //if I have 3 different value, return 0


}

// low straight and high straight
function allStraight(dices, number) {
    const sortedDices = dices.sort();
}


// YATHZEE (all of a kind)
function yahtzee(dices, haveOne) {
    for (i = 0; i < (dices.length - 1); i++) {
        if (dices[i] != dices[i + 1]) {
            return 0;
        }
    }
    if (haveOne === true)
        return 20 * dices;
    return 10 * dices;

}




module.exports = {
    faces,
    totalFirstSection,
    allOfAKind,
    fullHouse,
    allStraight,
    yahtzee
};