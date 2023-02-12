/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */

function mergeTwoLists(list1, list2) {
    return list1.concat(list2).sort()
};

// const result = mergeTwoLists([1, 2, 4], [1, 3, 4]);
// const result = mergeTwoLists([0], []);
const result = mergeTwoLists([1, 2, 4], [1, -3, 4]);
console.log(result);