// 700. Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the
// subtree rooted with that node. If such a node does not exist, return null.

// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]

// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [1, 5000].
// 1 <= Node.val <= 10**7
// root is a binary search tree.
// 1 <= val <= 10**7

//-----------------------------------------------------------------
const initializeTree = require("./Helpful BT creator from arrary");

const arr = [4, 2, 7, 1, 3];
const myBST = initializeTree(arr);

//Being a BST, smaller nodes go on left & bigger nodes go on right
const searchBST = function (root, val) {
  if (!root) return null;

  if (root.val === val) return root;

  const result = searchRec(root, val);
  return result;
};

const searchRec = function (node, val) {
  if (!node) return null;
  if (node.val === val) return node;

  //if it reaches leaf node and still no result, return null
  if (node.left === null && node.right === null) return null;

  if (val > node.val) return searchRec(node.right, val);
  if (val < node.val) return searchRec(node.left, val);
};

console.log(searchBST(myBST, 2));
