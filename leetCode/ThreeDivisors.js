/**
 * Given an integer n, return true if n has exactly three positive divisors. 
 * Otherwise, return false.
 * An integer m is a divisor of n if there exists an integer k such that n = k * m.
 * 
 * Example 1:
 * Input: n = 2
 * Output: false
 * Explantion: 2 has only two divisors: 1 and 2.
 * 
 * Example 2:
 * Input: n = 4
 * Output: true
 * Explantion: 4 has three divisors: 1, 2, and 4.
 */

function hasThreeDivisors(n) {
    let divisors = 0;
    let divisorsValues = [];
    for (let i = n; i > 0; i--) {
        if (n % i === 0) {
            divisors += 1;
            divisorsValues = [i, ...divisorsValues]
        }
        if (divisors > 3) {
            return false;
        }
    }
    return divisors === 3 ? divisorsValues : false;
}

for (let i = 1; i <= 10000; i++) {
    const x = hasThreeDivisors(i)
    if (x) {
        console.log(x);
    }
}

