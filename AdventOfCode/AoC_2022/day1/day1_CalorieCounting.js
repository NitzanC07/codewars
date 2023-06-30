/**
 * Advent of Code 2022
 * Day 1 - Calorie Counting
 * Link: https://adventofcode.com/2022/day/1
 */

const calorieElves_example = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const calorieElves = input.split('\n\n')
    .map(elf => elf.split('\n'))
    .map(elf => elf.map(item => Number(item)));

// console.log(calorieElves);

let sumEachElves = [];
for (let elf = 0; elf < calorieElves.length; elf++) {
    let currentElfSum = 0;
    for (let c = 0; c < calorieElves[elf].length; c++) {
        currentElfSum += calorieElves[elf][c];
    }
    
    sumEachElves = [...sumEachElves, currentElfSum]
}

// console.log(sumEachElves);

let topThreeElves = 0;
for (let i = 1; i <= 3; i++) {
    const maxElf = Math.max(...sumEachElves);
    topThreeElves += maxElf;
    sumEachElves.splice(sumEachElves.indexOf(maxElf), 1);
}
console.log(topThreeElves);


