/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer 
 * range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 * 
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    let digits = [];
    let num = x;
    while (num !== 0) {
        digits = [...digits ,num % 10];
        
        num = num > 0 ? Math.floor(num/10) : Math.ceil(num/10)
    }
    
    let result = 0;
    for (let i = digits.length -1; i >= 0; i--) {
        result += digits[i] * (10 ** (digits.length-1-i));
    }

    if (result > 2**31 || result < (-2)**31) {
        return 0;
    }
    return result;
};

console.log(reverse(1534236469));
