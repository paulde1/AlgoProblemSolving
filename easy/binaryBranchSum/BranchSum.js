// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, sum = 0, container = []) {
  let currentSum = root.value + sum;

  if (!root.left && root.right) {
    container.push(currentSum);
  }
  if (root.left) {
    branchSums(root.left, currentSum, container);
  }
  if (root.right) {
    branchSums(root.right, currentSum, container);
  }
  return container;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
