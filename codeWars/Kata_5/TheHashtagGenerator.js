/** The Hashtag Generator
 * level: kata 5
 * 
 * The marketing team is spending way too much time typing in hashtags
 * Let's help them with our own Hashtag Generator!
 * 
 * Here's the deal:
 * It must start with a hashtag (#).
 * All words must have their first letter capitalized.
 * If the final result is longer than 140 chars it must return false.
 * If the input or the result is an empty string it must return false.
 * 
 * Examples
 * " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
 * "    Hello     World   "                  =>  "#HelloWorld"
 * ""                                        =>  false
 */

function generateHashtag (str) {
    let output = "#"
    const words = str.split(" ")
    for (let w = 0; w < words.length; w++) {
        if (words[w]) {
            output += words[w][0].toUpperCase();
            output += words[w].slice(1).toLowerCase();
        }
    }
    
    if (output.length === 1 || output.length > 140) {
        return false;
    }
    return output;
}

const result = generateHashtag("")
console.log(result);