/**
 * * A technical interview at Bright Data.
 * * Home assignment as the first step in the process of the interviews.
 * 
 * ? You are given an array A if integers. Find the maximum number of non-intersecting 
 * ? segments of length 2 (two adjacment elements), such that segments have an equal sum. 
 * ? For example, given A =[10, 1, 3, 1, 2, 2, 1, 0, 4], there are three non-intersecting 
 * ? segments, each whoes sum is equal to 4: (1, 3), (2, 2), (0, 4).
 * 
 */

function solution(A) {
    if (A.length < 2) return 0;

    const sumPairs = {};

    for (let i = 0; i < A.length - 1; i++) {
        const pairSum = A[i] + A[i + 1];
        if (!sumPairs[pairSum]) {
            sumPairs[pairSum] = [];
        }

        const lastPair = sumPairs[pairSum][sumPairs[pairSum].length - 1];
        if (!lastPair || lastPair[1] < i) {
            sumPairs[pairSum].push([i, i + 1]);
        }
    }

    let maxCount = 0;
    for (const pairs of Object.values(sumPairs)) {
        maxCount = Math.max(maxCount, pairs.length);
    }
    console.log(sumPairs);

    return maxCount;
}

console.log(solution([4, 3, 3, 4]));
