function fib(n) {
    const fibSeq = [0, 1]
    for (let i = 2; i <= n; i++ ) {
        fibSeq.push(fibSeq[i-1] + fibSeq[i-2])
    }

    console.log(fibSeq);
    return fibSeq[n-1]    
};

console.log(fib(1));