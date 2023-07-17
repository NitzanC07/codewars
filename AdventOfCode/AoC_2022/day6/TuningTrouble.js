/**
 * Advent of Code 2022
 * Day 6 - Tuning Trouble
 * Link: https://adventofcode.com/2022/day/6
 */

// Part 1
// for (let i = 3; i < inputExample.length; i++) {
//     const marker = `${inputExample.slice(i-3, i+1)}`;
//     const markerChars = marker.split('');
//     let d = 0;
//     console.log(markerChars);
//     for (let c = 0; c < markerChars.length; c++) {
//         const a = markerChars.filter(x => x === markerChars[c])
//         if (a.length !== 1){
//             console.log(a.length);
//             break;
//         } else {
//             d += 1;
//         }         
//     }
    
//     if (d === 4) {
//         console.log(marker);
//         break;
//     }
// }

// Part 2
for (let i = 13; i < input.length; i++) {
    const marker = `${input.slice(i-13, i+1)}`;
    const markerChars = marker.split('');
    let d = 0;
    for (let c = 0; c < markerChars.length; c++) {
        const a = markerChars.filter(x => x === markerChars[c])
        if (a.length !== 1){
            break;
        } else {
            d += 1;
        }         
    }
    
    if (d === 14) {
        console.log(marker, i+1);
        break;
    }
}
