/** Highest and lowest
 * In this little assignment you are given a string of space separated numbers, 
 * and have to return the highest and lowest number.
 * 
 *  Notes
 * All numbers are valid Int32, no need to validate them.
 * There will always be at least one number in the input string.
 * Output string must be two numbers separated by a single space, and highest number is first.
 */

function highAndLow(str){
    // Write your code here.
    const arr = str.split(" ");
   
    function compareNumber(a, b) {
        return a - b;
    };
    arr.sort(compareNumber);
    
    const outputString = `${arr[arr.length-1]} ${arr[0]}`;
    return outputString
}

const tests = ["1 2 3 4 5", "1 2 -3 4 5", "1 9 3 4 -5", "8 3 -5 42 -1 0 0 -9 4 7 4 -4"];
tests.forEach((str) => {
    let l = str.length;
    let answer = highAndLow(str);
    console.log(`Result ${tests.indexOf(str)+1}: ${str} highest ans lowest string is: ${answer}.`);
})

