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
 */
var mergeTwoLists = function (list1, list2) {
  //To solve this problem, we can use recursion,
  //calling it until one of the sheets is null, and while it is not null,
  //we do an equality check, if list1 is less than or equal to list2,
  // call recursion with list1.next = mergeTwoLists (list1.next, list2),
  //else if the value is greater than list2.next = mergeTwoLists(list1, list2.next).
  //If one of the sheets is null, we simply return the opposite list (we don't care if it's null or not).
  // Thus, when the recursion ends, the stack will begin to collapse in reverse order, which will allow us to get a new merged sorted list.

  //O(m+n)
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
