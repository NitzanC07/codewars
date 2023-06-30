/**
 * Advent of Code 2022
 * Day 2 - Rock, Paper and Scissors
 * Link: https://adventofcode.com/2022/day/2
 */

const input_example = `C Z
B Y
A X`

const gameRounds = input_example.split('\n')
    .map(round => round.split(' '));

const rules = {
    rock: 1,
    paper: 2,
    scissors: 3,
    win: 6,
    lose: 0,
    draw: 3
}

const player1 = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
    result: 0
}

const player2 = {
    X: 'rock',
    Y: 'paper',
    Z: 'scissors',
    result: 0
}

for (let r = 0; r < gameRounds.length; r++) {
    console.log(player1[gameRounds[r][0]], player2[gameRounds[r][1]]);
    if (player1[gameRounds[r][0]] === player2[gameRounds[r][1]]) {
        console.log("draw");
    }
}