function pickPeaks(arr) {
    const peaksCounter = {
        pos: [],
        peaks: []
    }

    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            peaksCounter.pos.push(i);
            peaksCounter.peaks.push(arr[i]);
        } else if (arr[i] > arr[i-1] && arr[i] === arr[i+1]) {
            let j = i+1;
            while (arr[j] === arr[i]) {
                j += 1;
            }
            if (arr[i] > arr[j]) {
                peaksCounter.pos.push(i);
                peaksCounter.peaks.push(arr[i]);
            }
        }
    }
    return peaksCounter;
}

const result1 = pickPeaks([1,2,3,2]) // {pos:[2], peaks:[3]}
const result2 = pickPeaks([1,2,2,3,3,3,2]) // {pos:[3], peaks:[3]}
const result3 = pickPeaks([1,2,3,6,4,1,2,3,2,1]) // {pos:[3,7], peaks:[6,3]}
const result4 = pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1])//  {pos:[3,7,10], peaks:[6,3,2]}
const result5 = pickPeaks([1,2,3,3,3,3,4]) // {pos:[], peaks:[]}

console.log(result1);