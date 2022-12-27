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

// console.log(fizzBuzz(30));

function middleNode(head) {
    if (head.length >= 1 && head.length <= 100 ) {
        return head.slice(Math.floor(head.length / 2)) 
    }
};

console.log(middleNode([1, 2, 3, 4, 5, 6, 7, 8, 9]));