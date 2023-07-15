/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// const invertTree = function(root) {
//     // if no root is given return null
//     if(!root) return null;

//      // perform dfs , creat temp , reset left to right

//     let temp = root.left;
//     root.left = root.right;
//     root.right = temp;
//     // call function recursively on both right and left
//     invertTree(root.left);
//     invertTree(root.right);

//     return root;

// };

const invertTree = function (root) {
  // if no root is given return null
  if (!root) return null;

  // perform dfs , creat temp , reset left to right

  let left = root.left;
  let right = root.right;
  root.left = invertTree(right);
  root.right = invertTree(left);
  // call function recursively on both right and left

  return root;
};

//O(n) - time
//O(1) - constant space
