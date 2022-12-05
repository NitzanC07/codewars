/** Build Tower
 * Build a pyramid-shaped tower given a positive integer number of floors. 
 * A tower block is represented with "*" character. 
 * For example, a tower with 3 floors looks like this:
 * "  *  "
 * " *** "
 * "*****"
 */

 function towerBuilder(nFloors) {
    // Write your code here.
    const pyramid = [];
    let nF = 1;
    const width = nFloors * 2 - 1;
    for (let f = 1; f <= nFloors; f = f + 1) {
        const floor = `|${"".padStart((width-nF)/2, " ")}${"*".repeat(nF)}${"".padEnd((width-nF)/2, " ")}|`;
        // const floor = `|${"".padStart((nF)/2, " ")}${"*".repeat((width-nF+1))}${"".padEnd((nF)/2, " ")}|`;
        pyramid.push(floor);
        nF = nF + 2;
    }
    return pyramid
}

for (let nFloor = 1; nFloor < 15; nFloor = nFloor+4) {
    console.log(`Tower of ${nFloor} floors:`);
    const x = towerBuilder(nFloor);
    for(let i = 0; i < x.length; i++) {
        console.log(x[i])
    }
}
