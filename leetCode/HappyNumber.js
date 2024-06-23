function isHappy(n) {
  seen = [];
  
  while (n !== 1 && !seen.includes(n)){
    seen.push(n);
    n = sumOfSquares(n)
}
return n === 1
console.log(seen, n);
}


function sumOfSquares(n) {
    let sum = 0;
    while (n > 0) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
}

// const n = 8;
// if (isHappy(n)) {
//     console.log(`${n} is happy number.`);
// } else {
//     console.log(`${n} is sad number.`);
// }

let happyNumbers = [];
for (let n = 1; n < 1000; n++){
    if (isHappy(n)){
        happyNumbers.push(n)
    }
}
console.log(happyNumbers);