/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length-2; i++) {
        for (let j = i+1; j <= nums.length-1; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return "Not match"    
};

const result = twoSum([2, 5, 11, 15], 21)
// const result = twoSum([3, 2, 4], 6)
// const result = twoSum([0, 4, 3, 5, 3], 6)
console.log(result);
