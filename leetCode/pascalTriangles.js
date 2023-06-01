/** 
 * Pascal's Triangle
 * 
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 * 
 * Pascal's triangle:
 *         1            l=1
 *       1 | 1          l=2
 *     1 | 2 | 1        l=3
 *   1 | 3 | 3 | 1      l=4
 * 1 | 4 | 6 | 4 | 1    l=5
 * 
 * Examle:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 
 * Input: numRows = 1 
 * Output: [[1]]
 * 
 * @param {number} numRows
 * @return {number[][]}
 */

const generate = function(numRows) {
    let pascalTriangle = [];
    for (let lengthRow = 1; lengthRow <= numRows; lengthRow++) {
        // Creating a new row, lengthRow represent the number of row in the triangle and the length of it.
        const newRow = []
        for (let i = 0; i < lengthRow; i++) {
            // Inside each row every element in the edge get value of 1.
            // Otherwise, it take the last row which created and summarize apropriate indices to new element in the new row.
            if (i === 0 || i === lengthRow-1) {
                newRow.push(1);
            } else {
                // push the summarize of the two appropriate numbers from previoue row.
                const previoueRow = pascalTriangle[pascalTriangle.length -1]
                newRow.push(previoueRow[i] + previoueRow[i-1])
            }
        }
        pascalTriangle.push(newRow);
    }
    return (pascalTriangle);
}

console.log(generate(10));

