/**
 * Advent of Code 2022
 * Day 2 - Rock, Paper and Scissors
 * Link: https://adventofcode.com/2022/day/2
 */

const input_example = `A X
B Y
C Z`

const gameRounds = input.split('\n')
    .map(round => round.split(' '));

const rules = {
    rock: 1,
    paper: 2,
    scissors: 3,
    win: 6,
    lose: 0,
    draw: 3
}

const playerChoice = {
    rock: ['C', 'P', 1],
    paper: ['X', 'O', 2],
    scissors: ['Z', 'I', 3],
    result: {
        player1: 0,
        player2: 0
    }
}

for (let r = 0; r < input_game.length; r++) {
    if ((playerChoice.rock.includes(input_game[r][0])) && (playerChoice.rock.includes(input_game[r][1]))) {
        // draw, rock
        playerChoice.result.player1 += rules.draw + playerChoice.rock[2];
        playerChoice.result.player2 += rules.draw + playerChoice.rock[2];
    }
    else if ((playerChoice.paper.includes(input_game[r][0])) && (playerChoice.paper.includes(input_game[r][1]))) {
        // draw, paper
        playerChoice.result.player1 += rules.draw + playerChoice.paper[2];
        playerChoice.result.player2 += rules.draw + playerChoice.paper[2];
    }
    else if ((playerChoice.scissors.includes(input_game[r][0])) && (playerChoice.scissors.includes(input_game[r][1]))) {
        // draw, scissors
        playerChoice.result.player1 += rules.draw + playerChoice.scissors[2];
        playerChoice.result.player2 += rules.draw + playerChoice.scissors[2];
    }
    else if ((playerChoice.rock.includes(input_game[r][0])) && (playerChoice.paper.includes(input_game[r][1]))) {
        // player 1 rock, lose | player 2 paper, win
        playerChoice.result.player1 += rules.lose + playerChoice.rock[2];
        playerChoice.result.player2 += rules.win + playerChoice.paper[2];
    }
    else if ((playerChoice.rock.includes(input_game[r][0])) && (playerChoice.scissors.includes(input_game[r][1]))) {
        // player 1 rock, win | player 2 scissors, lose
        playerChoice.result.player1 += rules.win + playerChoice.rock[2];
        playerChoice.result.player2 += rules.lose + playerChoice.scissors[2];
    }
    else if ((playerChoice.paper.includes(input_game[r][0])) && (playerChoice.rock.includes(input_game[r][1]))) {
        // player 1 paper, win | player 2 rock, lose
        playerChoice.result.player1 += rules.win + playerChoice.paper[2];
        playerChoice.result.player2 += rules.lose + playerChoice.rock[2];
    }
    else if ((playerChoice.paper.includes(input_game[r][0])) && (playerChoice.scissors.includes(input_game[r][1]))) {
        // player 1 paper, lose | player 2 scissors, win
        playerChoice.result.player1 += rules.lose + playerChoice.paper[2];
        playerChoice.result.player2 += rules.win + playerChoice.scissors[2];
    }
    else if ((playerChoice.scissors.includes(input_game[r][0])) && (playerChoice.rock.includes(input_game[r][1]))) {
        // player 1 scissors, lose | player 2 rock, win
        playerChoice.result.player1 += rules.lose + playerChoice.scissors[2];
        playerChoice.result.player2 += rules.win + playerChoice.rock[2];
    }
    else if ((playerChoice.scissors.includes(input_game[r][0])) && (playerChoice.paper.includes(input_game[r][1]))) {
        // player 1 scissors, win | player 2 paper, lose
        playerChoice.result.player1 += rules.win + playerChoice.scissors[2];
        playerChoice.result.player2 += rules.lose + playerChoice.paper[2];
    }

}
console.log(playerChoice.result);
