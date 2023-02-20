/**
 * You are given a large integer represented as an integer array digits, where each digits[i] 
 * is the ith digit of the integer. The digits are ordered from most significant to least 
 * significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * Examples:
 * [1, 2, 3] => [1, 2, 4]
 * [3, 9] => [4, 0]
 * [9, 9] => [1, 0, 0]
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const l = digits.length;
  
  for (let digit = 1; digit <= l; digit++) {
    const current = digit === 1 ? digits[l - digit] + 1 : digits[l - digit];    
    const currentW = Math.floor(current / 10)
    const currentR = current % 10
    digits[l-digit] = currentR;
    
    if (current > 9 && digit === l) {
      digits = [currentW, ...digits]
      
    } else {
      digits[l-digit-1] += currentW
    }
    
  }

  return digits;
};

console.log(plusOne([1, 2, 3]))