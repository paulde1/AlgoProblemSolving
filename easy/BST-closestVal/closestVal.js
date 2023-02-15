function findClosestValueInBst(tree, target) {
  let current = null;
  let closest = Infinity;
  let node = tree;

  while (node !== null) {
    let value = Math.abs(node.value - target);
    if (value <= closest) {
      console.log(current);
      current = value;
    }
    if (closest === 0) {
      break;
    }
    if (target < node.value) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return current;
}

// This is the class of the input node. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
