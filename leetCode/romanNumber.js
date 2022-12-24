const romanSymbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

const romanToInt = function(s) {
    let decimalNumber = 0;
    const sArray = s.split('');
    sArray.forEach((digit, i) => {
        if(i < s.length - 1) {
            const currentDigit = digit;
            const nextDigit = sArray[i+1];
            if(romanSymbols[nextDigit] <= romanSymbols[currentDigit]) {
                decimalNumber += romanSymbols[currentDigit];
            } else {
                decimalNumber -= romanSymbols[currentDigit];
            }
        } else {
            decimalNumber += romanSymbols[digit];
        }
    })
    return decimalNumber;
}

console.log("CXLI", romanToInt("CXLI") === 141 );
console.log("MDCXLV", romanToInt("MDCXLV") === 1645);
console.log("CDVI", romanToInt("CDVI") === 406);

/**
 * X = 10
 * XX = 20
 * XXX = 30
 * XL = 40
 * L = 50
 * LX = 60
 * LXX = 70
 * LXXX = 80
 * XC = 90
 * C = 100
 */