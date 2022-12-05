/** Isogram
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 * Implement a function that determines whether a string that contains only letters is 
 * an isogram. Assume the empty string is an isogram. Ignore letter case.
 * 
 * Examples:
 * "Dermatoglyphics" --> true
 * "aba" --> false
 * "moOse" --> false (ignore letter case)
 */

function isIsogram(str) {
    // Write your code here.
    str = str.toLowerCase();
    for (let letter = 0; letter < str.length; letter++) {
        let counter = 0;
        for(let l = 0; l < str.length; l++) {
            if (str[letter] === str[l]) {
                counter = counter + 1
            }
            if (counter > 1) {
                return false;
            } 
            
        }
    }
    return (true);
}

const tests = ["Dermatoglyphics", "aba", "mouse", "Elephant", "אחשדרפנים", "דג", "דרדס", "אנדרלמוסיה"];
tests.forEach((word) => {
    let l = word.length;
    let answer = isIsogram(word);
    console.log(`Result ${tests.indexOf(word)+1}: ${word} is isogram? ${answer}. ${answer ? 'word\'s length: '+ l : ''}`);
})


