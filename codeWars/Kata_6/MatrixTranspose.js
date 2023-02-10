/** 
 * Write a function that outputs the transpose of a matrix - 
 * a new matrix where the columns and rows of the original are swapped.
 * 
 * For example, the transpose of:
 *      | 1 2 3 |
 *      | 4 5 6 |
 * is:
 *      | 1 4 |
 *      | 2 5 |
 *      | 3 6 |
 * 
 * The input to your function will be an array of matrix rows. 
 * You can assume that each row has the same length, and that the height and width of the matrix are both positive.
 */

function transpose(matrix) {
    const outputMatrix = []
    for (let col = 0; col < matrix[0].length; col++) {
        outputMatrix.push(matrix.map(row => row[col]));
    }
    return outputMatrix;
}

// Usage
const matrix = [[1, 2, 3], [4, 5, 6]]
const matrix1 = [[1, 2], [3, 4], [5, 6]]
const matrix2 = [[1]]
const result = transpose(matrix);
console.log(result);
