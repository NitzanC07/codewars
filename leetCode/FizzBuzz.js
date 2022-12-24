function fizzBuzz(n) {
    const fizzBuzzArray = []
    for (let i = 1; i <= n; i++) {
        i % 3 === 0 && i % 5 === 0 ? 
        fizzBuzzArray.push("FizzBuzz") :
        i % 3 === 0 ?
        fizzBuzzArray.push("Fizz") :
        i % 5 === 0 ?
        fizzBuzzArray.push("Buzz") :
        fizzBuzzArray.push(`${i}`)
    }
    return fizzBuzzArray;
};

console.log(fizzBuzz(30));