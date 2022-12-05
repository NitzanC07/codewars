function isPrime(num) {
    //TODO
    if (num <= 1) {
        return false
    } 
    else {
        for (let i = 2; i < num; i++) {
            console.log(num**0.5);
            if(num % i === 0) {
                return false;
            } 
            else {
                if(Math.round(num**(0.5)+1) === i) {
                    return true;
                }
            } 
        }
        return true;
    }
}

const x = isPrime(5099);
console.log(x);

