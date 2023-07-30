/**
 * Given two arrays of strings a1 and a2 return a sorted array r in 
 * lexicographical order of the strings of a1 which are substrings 
 * of strings of a2.
 * 
 * Example 1:
 * a1 = ["arp", "live", "strong"]
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 * returns ["arp", "live", "strong"]
 * 
 * Example 2:
 * a1 = ["tarp", "mice", "bull"]
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 * returns []
 * 
 * Notes:
 * Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
 * In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
 * Beware: In some languages r must be without duplicates.
 * 
 * @param {*} array1 
 * @param {*} array2 
 */

function inArray(array1, array2) {
    let result = [];
    for (let s = 0; s < array1.length; s++) {
        for (let w = 0; w < array2.length; w++) {
            if(array2[w].includes(array1[s]) && !result.includes(array1[s])) {
                result = [...result, array1[s]]
            };
        }
    }
    return result.sort();
}

const a1 = ["tarp", "mice", "bull"]
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
console.log(inArray(a1, a2))