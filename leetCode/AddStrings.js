/** Add strings
 *
 * Given two non-negative integers, num1 and num2 represented as string,
 * return the sum of num1 and num2 as a string.
 * You must solve the problem without using any built-in library for handling
 * large integers (such as BigInteger). You must also not convert the
 * inputs to integers directly.
 *
 * Example 1:
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 *
 * Example 2:
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 *
 * Example 3:
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

const addStrings = (num1, num2) => {
  let carry = 0;
  let result = "";

  let maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, "0");
  num2 = num2.padStart(maxLength, "0");

  for (let i = num1.length - 1; i >= 0; i--) {
    const sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  if (carry > 0) {
    result = carry + result;
  }
  // console.log(num1[num1.length-1]);
  return result;
};

const result = addStrings("75", "28");
console.log(result);
