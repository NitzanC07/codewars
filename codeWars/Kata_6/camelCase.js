/** Camel Case
 * Complete the solution so that the function will break up camel casing, 
 * using a space between words.
 * 
 * "camelCasing"  =>  "camel Casing"
 * "identifier"   =>  "identifier"
 * ""             =>  ""
 */

// complete the function
function solution(string) {
    let outputString = "";
    for(let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() ) {
            outputString = outputString + " ";
        }
        outputString = outputString + string[i];
    }
    return outputString;
}


const res1 = solution("camelCasing");
const res2 = solution("identifier");
const res3 = solution("MyNameIs");
const res4 = solution("youAndMe");

console.log(`Result 1: ${res1}\nResult 2: ${res2}\nResult 3: ${res3}\nResult 4: ${res4}`);
