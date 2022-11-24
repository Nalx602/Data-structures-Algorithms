// 112. Path Sum
// Given the root of a binary tree and an integer targetSum, return true if the tree
// has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

// Example 1:
//                          5
//                      /       \
//                     4         8
//                  /         /    \
//                11        13      4
//              /    \               \
//             7      2               1
// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is 5->4->11->2

// Example 2:
// Input: root = [1,2,3], targetSum = 5
//            1
//          /  \
//        2     3
// Output: false
// Explanation: There two root-to-leaf paths in the tree:
// (1 --> 2): The sum is 3.
// (1 --> 3): The sum is 4.
// There is no root-to-leaf path with sum = 5.

// Example 3:
// Input: root = [], targetSum = 0
// Output: false
// Explanation: Since the tree is empty, there are no root-to-leaf paths.

// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -1000 <= Node.val <= 1000
// -1000 <= targetSum <= 1000

//------------------------------------------------

//Traverse the BT in DFS way; once you reach a leaf node, check that the gathered sum=targetSum
const initializeTree = require("./Helpful BT creator from arrary");

const arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1];
const myBT = initializeTree(arr);
console.log(myBT);

const hasPathSum = function (root, targetSum) {
  if (!root) return false;

  const currSum = 0;

  return traverseInOrder(root, currSum, targetSum);
};

const traverseInOrder = function (node, currSum, targetSum) {
  //base cases ( reaching leaf nodes)

  if (!node) return false;

  currSum += node.val;
  if (node.left === null && node.right === null && currSum === targetSum)
    return true;
  if (node.left === null && node.right === null && currSum !== targetSum)
    return false;

  //Keep on trickling down on each possible branch; if at least one gives "true"
  //then it's good enough; so that is why we use logic OR;
  return (
    traverseInOrder(node.left, currSum, targetSum) ||
    traverseInOrder(node.right, currSum, targetSum)
  );
};

console.log(hasPathSum(myBT, 22));
