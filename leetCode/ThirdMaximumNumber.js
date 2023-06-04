/**
 * Third Maximum Number
 * 
 * Given an integer array nums, return the third distinct maximum number in this array. 
 * If the third maximum does not exist, return the maximum number.
 * 
 * Example 1:
 * Input: nums = [3,2,1]
 * Output: 1
 * 
 * Example 2:
 * Input: nums = [1,2]
 * Output: 2
 * 
 * Example 3:
 * Input: nums = [2,2,3,1]
 * Output: 1
 * 
 * @param {number[]} nums
 * @return {number}
 */

const thirdMax = function(nums) {
    let distinctMax = 0
    for (let i = 1; i <= 3; i++) {
        const max = Math.max(...nums);
        const maxNum = nums.filter(x => x === max);
        if (maxNum.length === 1) {
            distinctMax = max;
        }
        const nums = nums.filter(x => x !== max);
        console.log(max);
    }
    return "END" ;
};

const result = thirdMax([2, 2, 3, 1]);
console.log(result);