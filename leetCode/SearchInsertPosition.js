/**
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, return the index 
 * where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    // check target number with every element of nums array.
    // if target number is equal to element, return the index of the element.
    // if target number is smaller than element, return the index of current number.
    // if all the array checked and the target greater than every elements, return the last element's index plus one.

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i
        }
    }

    return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 7)) // 2
