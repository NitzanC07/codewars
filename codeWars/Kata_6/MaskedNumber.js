/**  Simple Fun #258: Is divisible By 6
 * 
 * A masked number is a string that consists of digits and one asterisk (*) that should be 
 * replaced by exactly one digit. Given a masked number s, find all the possible options to 
 * replace the asterisk with a digit to produce an integer divisible by 6.
 * 
 * Input/Output
 * [input] string s
 * A masked number.
 * 1 ≤ inputString.length ≤ 10000.
 * [output] a string array
 * 
 * Sorted array of strings representing all non-negative integers that correspond to the 
 * given mask and are divisible by 6.
 * 
 * Example
 * For s = "1*0", the output should be ["120", "150", "180"].
 * For s = "*1", the output should be [].
 * For s = "1234567890123456789012345678*0",
 * the output should be
 * [
 * "123456789012345678901234567800",
 * "123456789012345678901234567830",
 * "123456789012345678901234567860",
 * "123456789012345678901234567890"]```
 * As you can see, the masked number may be very large ;-)
*/

function isDivisibleBy6(s) {
    let results = [];
    const digits = s.split('');
    const i = digits.findIndex(e => e === "*");
    for (let n = 0; n <= 9; n++) {
        digits[i] = n;
        digits.map((n, l) => { digits[l] = Number(n) })
        let a = 0;
        for (let n = 0; n < digits.length; n++) {
            a += digits[n] * (10**(digits.length -n-1));
        }
        if (a % 6 === 0) {
            results = [...results, a.toString()]
        }
    }
    
    return results;
}
const result = isDivisibleBy6("731*54");
// const result2 = isDivisibleBy6(`${10**14}*0`);

console.log(result);
