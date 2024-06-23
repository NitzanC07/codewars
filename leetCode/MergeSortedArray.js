/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside 
 * the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements 
 * denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. 
 * nums2 has a length of n.
 * 
 * Example:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 */

function merge(nums1, m, nums2, n){
    // Initialize two pointers, one at the end of nums1 (before the 0s) and one at the end of nums2
    let pointer1 = m - 1
    let pointer2 = n - 1
    // Initialize a pointer for the current position in nums1 where the next element should be placed
    let currentPosition = m + n - 1

    // Loop until we've exhausted one of the arrays
    while (pointer1 >= 0 && pointer2 >= 0){
        // Compare the elements at the current pointers
        if (nums1[pointer1] > nums2[pointer2]) {
            // Place the larger element at the end of nums1
            nums1[currentPosition] = nums1[pointer1]
            // Move the pointer of nums1 one step back
            pointer1 = pointer1 - 1

        } else {
            // Place the larger element at the end of nums1
            nums1[currentPosition] = nums2[pointer2]
            // Move the pointer of nums2 one step back
            pointer2 = pointer2 - 1
        }
        // Move the current position one step back in nums1
        currentPosition = currentPosition - 1

    }

    // If there are remaining elements in nums2, copy them into nums1
    while (pointer2 >= 0) {
        nums1[currentPosition] = nums2[pointer2]
        currentPosition = currentPosition - 1
        pointer2 = pointer2 - 1
    }
    // Return nums1, which now contains the merged and sorted array
    return nums1
    }

const x = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(x);

// const a = [1, 2, 3];
// console.log(a);
// a.splice(3, 0, 5)
// console.log(a);