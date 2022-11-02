// 144. Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:
//  1
//   \
//    2
//   /
//  3
// Input: root = [1,null,2,3]
// Output: [1,2,3]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
//  1
// Input: root = [1]
// Output: [1]

// Constraints: The number of nodes in the tree is in the range [0, 100].
//             -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?

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
 * @return {number[]}
 */
//----------------------------------------------------
//This was already solved in "Algo Searching" - "lesson201_204_BFS_and_DFS_Implementation"

const preorderTraversal = function (root) {
  let number = [];
  if (root) preorderRec(root, number);

  return number;
};

const preorderRec = function (node, list) {
  list.push(node.val);
  if (node.left) preorderRec(node.left, list);
  if (node.right) preorderRec(node.right, list);

  //if it reaches this point, then the recursion inception of the "if"
  //statements have bubbled out and no longer are met and the list is finished
  return list;
};
