/** Two to One
 * Take 2 strings s1 and s2 including only letters from ato z. 
 * Return a new sorted string, the longest possible, containing 
 * distinct letters - each taken only once - coming from s1 or s2.
 */

function longest(s1, s2) {
    // Write your code here.
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let outputString = "";
    for (let i = 0; i < abc.length; i++) {
        if ( s1.includes(abc[i]) || s2.includes(abc[i])) {
            outputString = outputString + abc[i];
        }
    }
    return outputString;
}


let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
let expectedAnswer = "abcdefklmopqwxy"
let answer1 = longest(a, b); // "abcdefklmopqwxy"
console.log(answer1 === expectedAnswer);

a = "abcdefghijklmnopqrstuvxwyz"
expectedAnswer = "abcdefghijklmnopqrstuvwxyz"
let answer2 = longest(a, a) // "abcdefghijklmnopqrstuvwxyz"
console.log(a === expectedAnswer, answer2 === expectedAnswer);
