/**
 * Advent of Code 2021
 * Day 1 - Sonar Sweep
 * Link: https://adventofcode.com/2021/day/1
 */

const example = [1, 2, 3, 4, 1]

const measurements = input.split('\n').map(x => Number(x));

let count = 0;
for (let m = 0; m < measurements.length-3; m++) {
    const A = measurements[m] + measurements[m+1] + measurements[m+2]
    const B = measurements[m+1] + measurements[m+2] + measurements[m+3]
    if (B > A) {
        count++
    }
}
console.log(count)