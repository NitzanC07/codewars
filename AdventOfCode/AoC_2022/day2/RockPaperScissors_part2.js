/**
 * Advent of Code 2022
 * Day 2 - Rock, Paper and Scissors
 * Link: https://adventofcode.com/2022/day/2
 */

const input_example = `C X
C Y
C Z`

// const input_game = input.split('\n')
//     .map(round => round.split(' '));

const rules = {
    win: 6,
    lose: 0,
    draw: 3
}

const playerChoice = {
    rock: ['C', 1],
    paper: ['X', 2],
    scissors: ['Z', 3],
    result: {
        player1: 0,
        player2: 0
    }
}

for (let r = 0; r < input_game.length; r++) {
    if (playerChoice.rock.includes(input_game[r][0])) {
        // In case that player 1 choose rock.
        if (input_game[r][1] === 'P') {
            // I need to lose => choose scissors.
            playerChoice.result.player1 += rules.win + playerChoice.rock[1];
            playerChoice.result.player2 += rules.lose + playerChoice.scissors[1];
        } else if (input_game[r][1] === 'O') {
            // The round needs finish draw => choose rock.
            playerChoice.result.player1 += rules.draw + playerChoice.rock[1];
            playerChoice.result.player2 += rules.draw + playerChoice.rock[1];
        } else if (input_game[r][1] === 'I') {
            // I need to win => choose paper.
            playerChoice.result.player1 += rules.lose + playerChoice.rock[1];
            playerChoice.result.player2 += rules.win + playerChoice.paper[1];
        }
    }

    if (playerChoice.paper.includes(input_game[r][0])) {
        // In case that player 1 choose paper.
        if (input_game[r][1] === 'P') {
            // I need to lose => choose rock.
            playerChoice.result.player1 += rules.win + playerChoice.paper[1];
            playerChoice.result.player2 += rules.lose + playerChoice.rock[1];
        } else if (input_game[r][1] === 'O') {
            // The round needs finish draw => choose paper.
            playerChoice.result.player1 += rules.draw + playerChoice.paper[1];
            playerChoice.result.player2 += rules.draw + playerChoice.paper[1];
        } else if (input_game[r][1] === 'I') {
            // I need to win => choose scissors.
            playerChoice.result.player1 += rules.lose + playerChoice.paper[1];
            playerChoice.result.player2 += rules.win + playerChoice.scissors[1];
        }
    }

    if (playerChoice.scissors.includes(input_game[r][0])) {
        // In case that player 1 choose scissors.
        if (input_game[r][1] === 'P') {
            // I need to lose => choose paper.
            playerChoice.result.player1 += rules.win + playerChoice.scissors[1];
            playerChoice.result.player2 += rules.lose + playerChoice.paper[1];
        } else if (input_game[r][1] === 'O') {
            // The round needs finish draw => choose scissors.
            playerChoice.result.player1 += rules.draw + playerChoice.scissors[1];
            playerChoice.result.player2 += rules.draw + playerChoice.scissors[1];
        } else if (input_game[r][1] === 'I') {
            // I need to win => choose rock.
            playerChoice.result.player1 += rules.lose + playerChoice.scissors[1];
            playerChoice.result.player2 += rules.win + playerChoice.rock[1];
        }
    }
}
console.log(playerChoice.result);
