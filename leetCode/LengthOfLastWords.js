/**
 * Given a string s consisting of words and spaces, return the length 
 * of the last word in the string.
 * A word is a maximal substring
 * consisting of non-space characters only.
 * 
 * @param {string} s
 * @return {number}
 */

const lengthOfLastWord = function(s) {
  const words = s.split(" ")
  for(let i = words.length -1; i >= 0 ; i--) {
    if (words[i]) {
      return words[i].length
    }
  }
}

console.log(lengthOfLastWord("Hello    World  "));