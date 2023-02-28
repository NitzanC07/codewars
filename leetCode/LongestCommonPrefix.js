/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * 
 * Examples: 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    // Check each character of the strings.
    let commonPrefix = "";
    for (let i = 0; i < strs[0].length + 1; i++) {
        let prefix = `${strs[0].slice(0, i)}`
        const isSamePrefix = strs.every(str => str.startsWith(prefix))
        commonPrefix = isSamePrefix ? prefix : commonPrefix;
    }
    return commonPrefix;
};

console.log(longestCommonPrefix(["flight", "flow", "flower"]))