/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Take the first character.
    // Check if it appears in the rest of string.
    // If no, then return the index of it.
    // If yes, move forward to the next charcter.
    for (let i = 0; i < s.length; i++) {
        const restString = s.slice(0, i) + s.slice(i+1, i.length)
        console.log("rest", restString);
        if (!restString.includes(s[i])) {
            return i
        }
    }
    return -1
};

console.log(firstUniqChar("z"));