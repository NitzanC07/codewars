/**
 * Maximum Number of Balloon
 * 
 * Given a string text, you want to use the characters of text to form as 
 * many instances of the word "balloon" as possible.
 * 
 * You can use each character in text at most once. Return the maximum number 
 * of instances that can be formed.
 * 
 * Example 1:
 * Input: text = "nlaebolko"
 * Output: 1
 * 
 * Example 2:
 * Input: text = "loonbalxballpoon"
 * Output: 2
 * 
 * Example 3:
 * Input: text = "leetcode"
 * Output: 0
 */


function maxNumberOfBalloon(text) {
    const chars = {
        "b": [1, 0],
        "a": [1, 0],
        "l": [2, 0],
        "o": [2, 0],
        "n": [1, 0]
    }

    for (let i = 0; i < text.length; i++) {
        if (chars[text[i]]) {
            chars[text[i]][1] += 1
        }
    }

    const letters = Object.keys(chars);
    let potentialWriting = Infinity;
    for (let i = 0; i < letters.length; i++) {
        potentialWriting = (chars[letters[i]][1] / chars[letters[i]][0]) < potentialWriting ? 
        (Math.floor(chars[letters[i]][1] / chars[letters[i]][0])) : 
        potentialWriting;
    }

    return potentialWriting
}

const text1 = "nlaebolko"
const text2 = "loonbalxballpoon"
const text3 = "balon"
const checkResult = maxNumberOfBalloon(text3)
console.log(checkResult);