/**
 * Path Sum
 *
 * Given the root of a binary tree and an integer targetSum, return true if the tree
 * has a root-to-leaf path such that adding up all the values along the path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 * Example 1:
 * Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * Output: true
 * Explanation: The root-to-leaf path with the target sum is shown.
 *
 * Example 2:
 * Input: root = [1,2,3], targetSum = 5
 * Output: false
 * Explanation: There two root-to-leaf paths in the tree:
 * (1 --> 2): The sum is 3.
 * (1 --> 3): The sum is 4.
 * There is no root-to-leaf path with sum = 5.
 */

function findPath(levelOrderArray, targetSum) {
  let path = [];
  let currentSum = 0;
  
  function findPathHelper(nodeIndex) {
      console.log(path, currentSum);
      if (nodeIndex >= levelOrderArray.length || currentSum > targetSum) {
          return null;
        }

    let nodeValue = levelOrderArray[nodeIndex];
    path.push(nodeValue);
    currentSum += nodeValue;

    if (currentSum === targetSum) {
      return path.slice(); // Return a copy of the path
    }

    let leftChild = findPathHelper(2 * nodeIndex + 1);
    if (leftChild) {
      return leftChild;
    }

    let rightChild = findPathHelper(2 * nodeIndex + 2);
    if (rightChild) {
      return rightChild;
    }

    // Backtrack
    path.pop();
    currentSum -= nodeValue;
    return null;
  }

  return findPathHelper(0);
}

// Example usage:
let levelOrderArray1 = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
let levelOrderArray2 = [5, 8, 4, 11, null, 4, 13, 7, 2, null, null, null, 1];
let targetSum = 22;
let result = findPath(levelOrderArray2, targetSum);
console.log(result); // This should print the path that sums up to the target
