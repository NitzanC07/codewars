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

// const words = ["flight", "flow", "flower"]
const words = ["dog","racecar","car"]
console.log(longestCommonPrefix(words))

const argumentsFunc = document.querySelector('.arguments-function');
const result = document.querySelector('.result');
words.forEach(word => {
    argumentsFunc.textContent += `${word} `;
});
result.textContent += longestCommonPrefix(words);
