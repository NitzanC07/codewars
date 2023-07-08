/**
 * Advent of Code 2022
 * Day 4 - Camp Cleanup
 * Link: https://adventofcode.com/2022/day/4
 */

const inputExample = `2-4,6-8 
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
4-8,2-6`

const data = input.split('\n')
    .map(row => row.split(',')
    .map(r => r.split('-')
    .map(c => Number(c))))

// Part 1: Count how many pairs does one range fully contain the other?
let counter1 = 0;
for (let row = 0; row < data.length; row++) {
    if ((data[row][0][0] <= data[row][1][0] && data[row][0][1] >= data[row][1][1]) ||
        (data[row][0][0] >= data[row][1][0] && data[row][0][1] <= data[row][1][1])) {
        // console.log(data[row]);
        counter1 += 1;
    }
}
// console.log(`part one result: ${counter1}`);

// Part 2: In how many assignment pairs do the ranges overlap?
let counter2 = 0
for (let row = 0; row < data.length; row++) {
    if ((data[row][0][0] <= data[row][1][0] && data[row][0][1] >= data[row][1][0]) ||
        (data[row][1][0] <= data[row][0][0] && data[row][1][1] >= data[row][0][0])) {
        // console.log(data[row]);
        counter2 += 1;
    }
}

console.log(`part two result: ${counter2}`);

