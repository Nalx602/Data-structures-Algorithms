// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
//        2
//       / \
//     1    3
// Input: root = [2,1,3]
// Output: true

// Example 2:
//          5
//        /   \
//       1     4
//            / \
//           3   6
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

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
 * @return {boolean}
 */

class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}
const isValidBST = function (root) {
  //checking a node, the items to left are smaller, items to right are higher
  // root = [2,1,3]
  //root[0] -> root[1] left, root[2] right
  // x - children are at 2 * x +1 and 2 * x +2
  //root = [5,1,4,null,null,3,6]
  //root[2] -> left=root[4+1], right=root[4+2];
  // If I am going for a node, check if all el from left subtree are smaller

  const rootNode = new TreeNode;
  rootNode.value = root[0];
  rootNode.left = 
};
