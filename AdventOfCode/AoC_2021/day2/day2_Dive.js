/**
 * Advent of Code 2021
 * Day 2 - Dive
 * Link: https://adventofcode.com/2021/day/2
 */

const input_example = `forward 5
down 5
forward 8
up 3
down 8
forward 2`

const steps = input.split('\n')
.map(s => s.split(' '))
.map(s => [s[0], Number(s[1])])

const position = {
    horizontalAxis: 0,
    verticalAxis: 0,
    aim: 0
}

for (let s = 0; s < steps.length; s++) {
    // console.log(`Before ${steps[s]}: h: ${position.horizontalAxis} v: ${position.verticalAxis} aim: ${position.aim}`);
    if (steps[s][0] === 'forward') {
        position.horizontalAxis += steps[s][1]
        position.verticalAxis += position.aim * steps[s][1]
    }
    if (steps[s][0] === 'down') {
        // position.verticalAxis += steps[s][1]
        position.aim += steps[s][1]
    }
    if (steps[s][0] === 'up') {
        // position.verticalAxis -= steps[s][1]
        position.aim -= steps[s][1]
    }
    // console.log(`After ${steps[s]}: h: ${position.horizontalAxis} v: ${position.verticalAxis} aim: ${position.aim}\n\n`);
    // console.log(position);
}

console.log(position);
console.log(position.horizontalAxis * position.verticalAxis);