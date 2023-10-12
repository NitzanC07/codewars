/** 
 * Tombola game
 * 
 * ** SHORT INTRO **
 * "Tombola" is an Italian raffle/bingo-like game, mostly played during Christmas holidays; 
 * you have a sheet with 15 numbers and win increasing prizes while you complete it. Wikipedia link.
 * 
 * Tombola game in Wikipedia: https://en.wikipedia.org/wiki/Tombola_(game)
 * 
 * **SHEET SAMPLE**
 * https://www.codewars.com/kata/5898a751b2edc082f60005f4
 * 
 * ** THE KATA **
 * In this kata you have to validate the correctness of a tombola sheet. More specifically:
 * check if the sheet is made of 3 x 9 squares;
 * check if there is a total of 15 unique numbers (> 0) over the squares (empty spaces will be represented with zeros);
 * check if each of the 3 rows has 5 of the 15 numbers;
 * check if each column has from 1 to 3 numbers in increasing order from top to bottom row;
 * check if each column is divided in this way (inclusive, from first column to last): 
 * 1-9, 10-19, 20-29, 30-39, 40-49, 50-59, 60-69, 70-79, 80-90 (<- careful here! 90 is included in the last range!).
 * 
 * ** TESTS **
 * To make the kata more challenging, I will not tell you why the input sheet is not valid.
 */

function check_tombola(tombolaBoard){
    let uniqueNumbers = [];
    let totalRowNumbers = [];
    let totalColumnsNumbers = [];
    
    if (tombolaBoard.length !== 3) {
        return [false, "Tambola board hasn't 3 rows."]
    }
    for (let row = 0; row < tombolaBoard.length; row++) {
        if (tombolaBoard[row].length !== 9) {
            return [false, "Tambola board hasn't 9 columns."]
        };

    } 
        
    return true;
}

tombolaBoard1 = [
    [0, 16, 0, 37, 0, 54, 0, 75, 81],
    [1, 0, 28, 0, 41, 59, 0, 0, 84],
    [0, 19, 29, 0, 45, 0, 65, 0, 89]
];

tombolaBoard2 = [
    [0, 0, 0, 35, 0, 55, 60, 72, 86],
    [3, 0, 22, 0, 40, 58, 0, 79, 0],
    [7, 0, 25, 0, 41, 0, 65, 0, 88]
];

tombolaBoard3 = [
    [0, 11, 0, 0, 41, 0, 65, 70, 0],
    [0, 16, 24, 32, 48, 0, 67, 0, 90],
    [1, 0, 27, 33, 0, 59, 0, 74, 0]
];

console.log(check_tombola(tombolaBoard1));