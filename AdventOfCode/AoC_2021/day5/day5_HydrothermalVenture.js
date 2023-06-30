/**
 * Advent of Code 2021
 * Day 5 - Hydrothermal Venture
 * Link: https://adventofcode.com/2021/day/5
 */

const input = `194,556 -> 739,556
818,920 -> 818,524
340,734 -> 774,300
223,511 -> 146,434
841,47 -> 122,766`

const coordinates = input.split('\n')
.map(line => line.split(' -> '))
.map(pair => pair.map(point => point.split(',').map(Number)));

console.log(coordinates);

