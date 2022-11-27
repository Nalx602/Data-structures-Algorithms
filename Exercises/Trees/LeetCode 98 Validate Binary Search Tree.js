// 98. Validate Binary Search Tree
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
//         2
//       /  \
//      1    3
// Input: root = [2,1,3]
// Output: true

// Example 2:
//       5
//     /  \
//    1    4
//        / \
//       3   6
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -2**31 <= Node.val <= 2**31 - 1
//-----------------------------------------------------------
//To solve this, you can try a method of using brute force...traverse the BST in a BFS way and check
//if the left child and right child follow the rules until leaf nodes.
//Another way would be to traverse the BST in a DFS InOrder way...this should give you the values
//in increasing order, as you check LeftChild->Parent->RightChild

const initializeTree = require("./Helpful BT creator from arrary");

const arr = [2, 2, 2];
const myBST = initializeTree(arr);

const isValidBST = function (root) {
  let treeVals = [];
  if (!root) return true;
  if (!root.left && !root.right) return true;

  treeVals = dfsInOrder(root, treeVals);

  let test = true; //checking if this changes in the loop, where you check
  //if the elems in the array are in increasing order;
  for (let i = 1; i < treeVals.length; i++) {
    if (treeVals[i - 1] >= treeVals[i]) test = false;
  }

  return test;
};

const dfsInOrder = function (node, arr) {
  //Base case reaching past a leaf node
  if (!node) return;

  if (node.left) dfsInOrder(node.left, arr);
  arr.push(node.val);
  if (node.right) dfsInOrder(node.right, arr);

  return arr;
};

console.log(isValidBST(myBST));
