/**
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * @param {string} a
 * @param {string} b
 * @return {string}
*/

const decimalToBinary = (n) => {
    let binary = [];
    let dec = n

    binary.push(n === 0 ? "0" : "") 

    while (dec > 0) { 
        binary.splice(0, 0, dec % 2 === 0 ? '0' : '1')
        dec = Math.floor(dec / 2);
    }
    return binary.join("");
}

const binaryToDecimal = (n) => {
    let nDecimal = 0;
    for (let d = n.length - 1; d >= 0 ; d--) {
        nDecimal += n[d]*2**(n.length-1-d);
    }
    return nDecimal;
}

function addBinary(a, b) {

    const A = binaryToDecimal(a);
    const B = binaryToDecimal(b);
    const C = A + B;

    return decimalToBinary(C);
};

// const result = addBinary(
//     "11111000000100001", 
//     "1000011111111111"
//     )
// const result = decimalToBinary(78)
// console.log(result);

const decimalToBaseN = (n, b) => {
    if (b < 2 || b > 10) {
        return "Base parameter is not valid."
    }
    let targetBase = [];
    let dec = n

    targetBase.push(n === 0 ? "0" : "") 

    while (dec > 0) { 
        targetBase.splice(0, 0, dec % b)
        dec = Math.floor(dec / b);
    }
    return targetBase.join("");
}

console.log(decimalToBaseN(11, 2));