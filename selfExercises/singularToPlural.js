/**
 * Write a function which gets a singular word and return that word in plural form.
 *
 * For example:
 *      "apple" => "apples"
 *      "notebook" => "notebooks"
 *      "flower" => "flowers"
 *      "buttery" => "butteries"
 *
 * Resources:
 * Nouns - Singular and Plural rules - https://academiaidiomas1.wixsite.com/eagles9/post/2018/09/19/nouns-singular-to-plural
 */


function singularToPlural(word) {
    // Check for words ending in 'y' that are preceded by a consonant
    if (word.endsWith('y') && !isVowel(word.charAt(word.length - 2))) {
        return word.slice(0, -1) + 'ies';
    }
    // Check for words ending in 'o', 's', 'sh', 'ch', 'x', or 'z'
    else if (word.endsWith('o') || word.endsWith('s') || word.endsWith('sh') || word.endsWith('ch') || word.endsWith('x') || word.endsWith('z')) {
        return word + 'es';
    }
    // Default case: add 's' to the end
    else {
        return word + 's';
    }
}

// Helper function to check if a character is a vowel
function isVowel(char) {
    return 'aeiou'.includes(char.toLowerCase());
}

const pluralForm = singularToPlural("quiz");
console.log(pluralForm);
