/**
 * Advent of Code 2022
 * Day 3 - Rucksack Reorganization
 * Link: https://adventofcode.com/2022/day/3
 * 
 * Rucksack - תרמיל
 * Compartment - תא
 */

const inputExample = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const rucksacks = inputRucksacks.split('\n');
let priorities = 0;

// Part 1 
// for (let r = 0; r < rucksacks.length; r++) {
//     const compartment1 = rucksacks[r].slice(0, Math.floor(rucksacks[r].length / 2));
//     const compartment2 = rucksacks[r].slice(Math.floor(rucksacks[r].length / 2), rucksacks[r].length);
//     for (let item = 0; item < compartment1.length; item++) {
//         const isIncludeBoth = compartment2.includes(compartment1[item]);
//         if (isIncludeBoth) {
//             priorities += abc[compartment1[item]];
//             break;
//         }
//     }
// }
// console.log(priorities);

// Part 2
priorities = 0;

for (let r = 0; r < rucksacks.length; r++) {
    if (r % 3 !== 0) {
        continue;
    }
    for (let item = 0; item < rucksacks[r].length; item++) {
        const isIncludeSecond = rucksacks[r+1].includes(rucksacks[r][item]);
        const isIncludeThird = rucksacks[r+2].includes(rucksacks[r][item]);
        if (isIncludeSecond && isIncludeThird) {
            priorities += abc[rucksacks[r][item]];
            break;
        }
    }
}

console.log(priorities);