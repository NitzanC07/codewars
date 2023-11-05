/** 
 * Pascal Triangle
 * https://leetcode.com/problems/pascals-triangle/
 * 
 * 
 */

function generate(numRows) {
    let pascalTriangle = [[1]];

    while (pascalTriangle.length < numRows) {
        let newRow = [1];
        const lastRow = pascalTriangle[pascalTriangle.length-1];
        for (let i = 1; i < lastRow.length; i++) {
            newRow.push(lastRow[i] + lastRow[i-1])
        }
        newRow.push(1)
        pascalTriangle = [...pascalTriangle, newRow]
    }
    return pascalTriangle;
}

const triangle = generate(10);

console.log(triangle[9]);