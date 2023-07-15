/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let NewList = new ListNode();
  let head = NewList;
  let sum = 0;
  let carryOver = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carryOver = 1;
      sum -= 10;
    }
    head.val = sum;
    if (l1 || l2 || carryOver > 0) {
      head.next = new ListNode(carryOver);
      head = head.next;
    }
    sum = carryOver;
    carryOver = 0;
  }
  return NewList;
};

// O(n,m) - Time due to the length of the two lists
// O(n,m) - space create a new list

const addTwoNumbers = function (l1, l2) {
  return numberAdder(l1, l2, 0);
};
const numberAdder = function (l1, l2, carryOver) {
  let sum = carryOver;
  let nextl1;
  let nextl2;
  if (l1) {
    sum += l1.val;
    nextl1 = l1.next;
  }
  if (l2) {
    sum += l2.val;
    nextl2 = l2.next;
  }
  if (!carryOver && !l1 && !l2) {
    return null;
  } else {
    const value = sum % 10;
    const carryOver = Math.floor(sum / 10);
    const next = numberAdder(nextl1, nextl2, carryOver);
    return new ListNode(value, next);
  }
};

//
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  //Time Complexity O(N) & Space Complexity O(1)
  //write a reversal function outside
  //reverse lists and store last node
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  //set prev to null and carry over to 0
  let prev = null;
  let carry = 0;

  while (l1 || l2) {
    //edge case when l1 or l2 doesnt exist set to val or 0
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const value = (val1 + val2 + carry) % 10;
    carry = Math.floor((val1 + val2 + carry) / 10);

    //build linked list in reverse order
    let curr = new ListNode(value);
    curr.next = prev;
    prev = curr;

    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }

  //if there is still a number to carry, add to list and reverse
  if (carry > 0) {
    const curr = new ListNode(carry);
    curr.next = prev;
    prev = curr;
  }
  return prev;
};

function reverseList(cur) {
  let prev = null;
  while (cur) {
    const temp = cur.next;
    cur.next = prev;

    prev = cur;
    cur = temp;
  }
  return prev;
}
