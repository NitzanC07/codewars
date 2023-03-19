function isPrime(num) {
    if (num <= 1) {
        return false
    } 
    else {
        for (let i = 2; i < num; i++) {
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

const x = isPrime(3);
console.log(x);

