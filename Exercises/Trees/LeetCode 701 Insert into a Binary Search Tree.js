// 701. Insert into a Binary Search Tree
// You are given the root node of a binary search tree (BST) and a value to insert into the tree.
// Return the root node of the BST after the insertion.
// It is guaranteed that the new value does not exist in the original BST.
// Notice that there may exist multiple valid ways for the insertion, as long as the
// tree remains a BST after insertion. You can return any of them.

// Example 1:
// Input: root = [4,2,7,1,3], val = 5
//             4                        4
//          /    \                   /    \
//         2      7    ->           2      7
//       /  \                     /  \    /
//      1    3                   1    3  5
// Output: [4,2,7,1,3,5]
// Explanation: Another accepted tree is:
//           5
//         /  \
//        2    7
//       / \
//      1   3

// Example 2:

// Input: root = [40,20,60,10,30,50,70], val = 25
// Output: [40,20,60,10,30,50,70,null,null,25]
// Example 3:

// Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
// Output: [4,2,7,1,3,5]

// Constraints:

// The number of nodes in the tree will be in the range [0, 104].
// -108 <= Node.val <= 108
// All the values Node.val are unique.
// -108 <= val <= 108
// It's guaranteed that val does not exist in the original BST.
// --------------------------------------------------
//This is a BST, so you must go left or right, based on if the val is bigger or smaller than current node
const initializeTree = require("./Helpful BT creator from arrary");
const arr = [4, 2, 7, 1, 3];
const myBST = initializeTree(arr);
console.log(myBST);

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  insertRec(root, val);

  return root;
};

const insertRec = function (node, val) {
  if (!node) return;

  if (node.val < val) {
    if (node.right) {
      insertRec(node.right, val);
    } else {
      node.right = new TreeNode(val);
      return;
    }
  }

  if (node.val > val) {
    if (node.left) {
      insertRec(node.left, val);
    } else {
      node.left = new TreeNode(val);
      return;
    }
  }
};

console.log(insertIntoBST(myBST, 5));

//You can also do it in an iterative way, with a "while" loop, check "lesson131_135_BST_Insert_Lookup_Remove"
