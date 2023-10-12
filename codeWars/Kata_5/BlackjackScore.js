/** 
 * Blackjack score
 * Codewars: https://www.codewars.com/kata/534ffb35edb1241eda0015fe
 * 
 * Complete the function that determines the score of a hand in the card game Blackjack (aka 21).
 * The function receives an array of strings that represent each card in the hand 
 * ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
 * 
 * Scoring rules:
 * Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. 
 * An Ace can be counted as either 1 or 11.
 * 
 * Return the highest score of the cards that is less than or equal to 21. If there is no score less than or equal to 21 return the smallest score more than 21.
 * 
 * Examples
 * ["A"]                           ==>  11
 * ["A", "J"]                      ==>  21
 * ["A", "10", "A"]                ==>  12
 * ["5", "3", "7"]                 ==>  15
 * ["5", "4", "3", "2", "A", "K"]  ==>  25
 */

function scoreHand(cards) {
    const cardsValues = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "J": 10, "Q": 10, "K": 10, "A": 11};
    let score = 0;
    let countAces = 0;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i] === "A") {
            score += cardsValues[cards[i]];
            countAces += 1;
        }
        else {
            score += cardsValues[cards[i]];
        }
    }

    while (countAces > 0 && score > 21) {
        score -= 10;
        countAces -= 1;
    }

    return score;
}

let result = 0;
// result = scoreHand(["A"]) // 11
// result = scoreHand(["A", "J"]) // 21
result = scoreHand(["A", "10", "A"]) // 12
// result = scoreHand(["5", "3", "7"]) // 15
// result = scoreHand(["5", "3", "7", "2", "A", "8"]) // 26 Faild
console.log(result);