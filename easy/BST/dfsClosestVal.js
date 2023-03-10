
 function findClosestValueInBst(tree, target) {
  let difference =  {value: Infinity, closest: null}
  findClosestValue(tree, target, difference)
  return difference.closest
  } 

function findClosestValue(tree, target, difference){
    if(!tree) return ;

    const curDiff = Math.abs(target - tree.value);
    if(curDiff < difference.value) {
      difference.closest = tree.value;
      difference.value = curDiff;
    }
    if(target < tree.value) findClosestValue(tree.left, target,difference);
    else if (target > tree.value) findClosestValue(tree.right, target,difference);
    }

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
exports.findClosestValueInBst = findClosestValueInBst;
