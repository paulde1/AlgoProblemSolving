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
const addTwoNumbers = function(l1, l2) {
    let NewList = new ListNode();
    let head = NewList;
    let sum = 0;
    let carryOver = 0;

    while(l1||l2||sum > 0){
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        };
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        };
        if (sum >= 10) {
            carryOver = 1;
            sum -= 10;
        };
        head.val = sum;
        if (l1|| l2 || carryOver > 0) {
            head.next = new ListNode(carryOver);
            head = head.next;
        };
        sum = carryOver;
        carryOver = 0;
    };
    return NewList;
};

O(n,m) - Time due to the length of the two lists
O(n,m) - space create a new list

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
