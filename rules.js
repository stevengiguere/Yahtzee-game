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

    const subtotal = [];


    if (scoreFirstSection >= 63) {
        console.log("you score more than 63pts, you earn a 35pts bonus")
        console.log("subtotal before bonus = " + scoreFirstSection);
        scoreFirstSection += 35;
        console.log("subtotal = " + scoreFirstSection);

        subtotal.push(scoreFirstSection, bonus);
    } else {
        console.log("subtotal = " + scoreFirstSection);

        subtotal.push(scoreFirstSection, bonus);
    }
    console.log(subtotal);
    return subtotal >= 63;
}
// When 1st section fulfilled, if total of the first section >= 63, then subtotal + bonus 35pts

// SECOND SECTION
// (3 and 4-of-a-kind)
function allOfAKind(dices, number) {

    const sortedDices = dices.sort();
    const thisDice = 0;
    const possibilities = dices.length + 1;

    //number of possibilities
    for (i = 0; i < (possibilities - number); i++) {

        //check if the value is the same for the 'number'OfAKind
        for (j = 0; j < (number - 1); j++) {

            //if this dice different from next dice, go to next possibility
            if (sortedDices[thisDice] != sortedDices[thisDice++]) break;


            // After verification, return the total value of the dices
            if (number === (thisDice + 1)) {
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

    // check value if "1st = 2nd" AND "4th = Last", middle must be = to the first or last one 
    // i.e. : [2, 2, 3, 3, 3] AND [1, 1, 1, 5, 5] true
    if (dices[0] === dices[1])
        if (dices[3] === dices[4])
            if (dices[2] === dices[1] || dices[2] === dices[3])
                return 25;
    return 0;

}

// low straight and high straight
function allStraight(dices, number, score) {
    const sortedDices = dices.sort();
    const possibilities = dices.length + 1;
    let kind_count = 1;

    for (i = 0; i < (possibilities - number); i++) {

        for (j = 0; j < number; j++) {

            if (sortedDices[i + j] === (sortedDices[i + j + 1] - 1))
                kind_count += 1;
            else if (sortedDices[i + j] != (sortedDices[i + j + 1]))
                break;

        }

        if (kind_count === number)
            return ((number * 10) - 10);
        kind_count = 1;
    }
    return 0;

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