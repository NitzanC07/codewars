/**
 * A perfect number is a positive integer that is equal to the sum of its positive divisors, 
 * excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
 * 
 * Given an integer n, return true if n is a perfect number, otherwise return false.
 * 
 * Example 1:
 * Input: num = 28
 * Output: true
 * Explanation: 28 = 1 + 2 + 4 + 7 + 14
 * 1, 2, 4, 7, and 14 are all divisors of 28.
 * 
 * Example 2:
 * Input: num = 7
 * Output: false
 *
 * @param {number} num
 * @return {boolean}
 */

function checkPerfectNumber(num) {
    let divisors = [];
    for (let n = 1; n <= num/2; n++) {
        if (num % n === 0) {
            divisors = [...divisors, n]
        }
    }
    const summary = divisors.reduce((a, b) => a + b, 0)
    return summary === num;
};

for (let a = 1; a < 10000; a++) {
    const result = checkPerfectNumber(a);
    if (result) {
        console.log(a);
    }
}