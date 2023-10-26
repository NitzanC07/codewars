/** Sorting By Bits
 * https://www.codewars.com/kata/59fa8e2646d8433ee200003f
 * 
 * In this kata you're expected to sort an array of 32-bit integers in ascending 
 * order of the number of on bits they have.
 * 
 * E.g Given the array [7, 6, 15, 8]
 * 7 has 3 on bits (000...0111)
 * 6 has 2 on bits (000...0110)
 * 15 has 4 on bits (000...1111)
 * 8 has 1 on bit (000...1000)
 * So the array in sorted order would be [8, 6, 7, 15].
 * 
 * In cases where two numbers have the same number of bits, compare their real values instead.
 * E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' 
 * but the integer 10 is less than 12 so it comes first in sorted order.
 * Your task is to write a function that takes an array of integers and sort them as described above.
 * 
 * Note: your solution has to sort the array in place.
 * 
 * Example:
 * [3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
 */

const decimalToBinary = (n) => {
    let binary = [];
    let dec = n;
    let counterOnBit = 0;

    binary.push(n === 0 ? "0" : "") 

    while (dec > 0) { 
        binary.splice(0, 0, dec % 2 === 0 ? '0' : '1');
        if (dec % 2 !== 0) {
            counterOnBit += 1;
        }
        dec = Math.floor(dec / 2);
    }
    return [binary.join(""), counterOnBit];
}

function sortArray(inputArray) {
    let sortedArray = inputArray.slice();

    sortedArray = inputArray.sort(
        (a1, a2) => 
            (a1.OnBits < a2.OnBits) ? -1 : (a1.OnBits > a2.OnBits) ? 1 : 
            (a1.decimal < a2.decimal) ? -1 : (a1.decimal > a2.decimal) ? 1 : 0);
    
    return sortedArray;
}

function sortByBits(arr) {
    let numbersDetails = [];
    for(let i = 0; i < arr.length; i++) {
        const numberDetails = {}
        numberDetails.decimal = arr[i]
        numberDetails.binary = decimalToBinary(arr[i])[0];
        numberDetails.OnBits = decimalToBinary(arr[i])[1]
        numbersDetails = [...numbersDetails, numberDetails];
    }
    
    const sortedArray = sortArray(numbersDetails);
    let outputArray = []
    for (let i = 0; i < sortedArray.length; i++) {
        outputArray = [...outputArray, sortedArray[i].decimal];
    }

    return outputArray;
}


console.log(sortByBits([ 3, 8, 3, 6, 5, 7, 9, 1 ]));