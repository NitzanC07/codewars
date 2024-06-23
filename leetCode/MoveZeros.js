/**
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 *
 * Example 1:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Example 2:
 * Input: nums = [0]
 * Output: [0]
 */

// First solution:
function moveZeroes(nums) {
  let cntNotZeros = 0;
  let currentNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      currentNumber = nums[i];
      nums.splice(i, 1); // Remove the current number from the index.
      nums.splice(cntNotZeros, 0, currentNumber); // Add current number to appropriate index before the first zero.
      cntNotZeros++; //
    }
  }
  return nums;
}

const nums = [1, 0, 3, 0, 12, 0, 8];
// const result = moveZeroes(nums);
// console.log(result);

// Second solution:
function moveZeroesV2(nums) {
  let L = 0;
  for (let R = 0; R < nums.length; R++) {
    if (nums[R] !== 0) {
      let temporaryNum = nums[L];
      nums[L] = nums[R];
      nums[R] = temporaryNum;
      L++;
    }
  }
  return nums;
}

const result2 = moveZeroesV2(nums);
console.log(result2);
