/**
 * Advent of Code 2022
 * Day 5 - Supply Stacks
 * Link: https://adventofcode.com/2022/day/5
 */

const inputExample = `move 8 from 3 to 2
move 1 from 9 to 5
move 5 from 4 to 7`

const data = input.split('\n')
.map(row => row.split(' ')
.filter(c => Number(c)))
.map(row => row.map(c => Number(c)));

// Part 1
// for (let line = 0; line < data.length; line++) {
//     const amountCrates = data[line][0]
//     for (let e = 0; e < amountCrates; e++) {
//         const sourceStack = stacks[data[line][1]];
//         const destinationStack = stacks[data[line][2]]
//         const element = sourceStack[sourceStack.length -1]
//         destinationStack.push(element);
//         sourceStack.pop();
//     }
// }

// let result = '';
// for (let s = 1; s <= 9; s++) {
//     if (stacks[s][0]){
//         const last = stacks[s][stacks[s].length-1];
//         result += last;
//     }
// }

// Part 2
for (let line = 0; line < data.length; line++) {
    const amountCrates = data[line][0]
    const sourceStack = stacks[data[line][1]];
    const destinationStack = stacks[data[line][2]];
    const elements = sourceStack.slice(sourceStack.length - amountCrates, sourceStack.length)
    stacks[data[line][2]] = destinationStack.concat(elements);
    stacks[data[line][1]] = sourceStack.slice(0, sourceStack.length - elements.length);
}
console.log(stacks);

let result2 = '';
for (let s = 1; s <= 9; s++) {
    if (stacks[s][0]){
        const last = stacks[s][stacks[s].length-1];
        result2 += last;
    }
}
console.log(result2);
