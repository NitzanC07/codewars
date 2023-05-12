/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
    const initialSequence = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        const nextNum = initialSequence[initialSequence.length -1] + initialSequence[initialSequence.length -2] + initialSequence[initialSequence.length -3];
        initialSequence.push(nextNum)
    }
    return initialSequence[initialSequence.length -1]         
};

console.log(tribonacci(0));