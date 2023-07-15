/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// recursive approach, uses whiloe loop O(n)
const flatten = function (head) {
  const result = [];
  const flat = (node) => {
    if (!node) return null;
    result.push(node);
    flat(node.child);
    flat(node.next);
  };
  flat(head);
  for (let i = 0; i < result; i++) {
    result[i].prev = result[i - 1] || null;
    result[i].next = result[i + 1] || null;
    result[i].child = null;
  }
  return result[0] || null;
};

// iterative O(n) - time , O(!) space
const flatten = function (head) {
  if (!head) return null;
  let currNode = head;
  while (currNode) {
    if (currNode.child) {
      let childNode = currNode.child;
      let tail = childNode;
      let next = currNode.next;
      while (tail.next) {
        tail = tail.next;
      }
      if (currNode.next) {
        currNode.next = childNode;
        childNode.prev = currNode;
        tail.next = next;
        next.prev = tail;
        currNode.child = null;
        currNode = currNode.next;
      } else {
        currNode.next = childNode;
        childNode.prev = currNode;
        currNode.child = null;
      }
    } else {
      currNode = currNode.next;
    }
  }
  return head;
};
