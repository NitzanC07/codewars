/**
 * Given a non-empty array of integers nums, every element appears
 * twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 *
 * @param {number[]} nums
 * @return {number}
 */
console.clear();

const singleNumber = function (nums) {
  let singleNum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (!singleNum.includes(nums[i])) {
      console.log(singleNum);
      singleNum = [...singleNum, nums[i] ]
    } else {
      singleNum = singleNum.filter(n => n !== nums[i])
    }
  }
  return singleNum[0]
};

console.log(singleNumber([1, 2, 3, 2, 1]));
