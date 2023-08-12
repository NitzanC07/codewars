/** 
 * Not Very Secure
 * Code Wars - kata 5
 * 
 * In this example you have to validate if a user input string is alphanumeric. 
 * The given string is not nil/null/NULL/None, so you don't have to check that.
 * 
 * The string has the following conditions to be alphanumeric:
 * 
 * At least one character ("" is not valid)
 * Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
 * No whitespaces / underscore
 */

function alphanumeric(string){
    if (string) {
        const abc = "abcdefghijklmnopqrstuvwxyz"                
        const ABC = abc.toUpperCase();
        const nums = "0123456789"
        for (let i = 0; i < string.length; i++) {
            if (!abc.includes(string[i]) && !ABC.includes(string[i]) && !nums.includes(string[i])) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function alphanumericRegex (string) {
    return /^[a-z0-9]+$/i.test(string);
}


console.log(alphanumericRegex("HelloWorld")); // true
console.log(alphanumericRegex("Hello world_")); // false
console.log(alphanumericRegex("passw0rd")); // true
console.log(alphanumericRegex("    ")); // false
console.log(alphanumericRegex("")); // false