// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the
// longest path from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
//         3
//       /   \
//      9    20
//          /  \
//        15    7
// Output: 3

// Example 2:
// Input: root = [1,null,2]
//     1
//      \
//       2
// Output: 2

// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
//---------------------------------------

const BST = require("../../Algo Searching//lesson201_204_BFS_and_DFS_Implementation");

const myTree = new BST();

myTree.insert(12);
myTree.insert(5);
myTree.insert(3);
myTree.insert(7);
myTree.insert(15);
myTree.insert(13);
myTree.insert(14);
myTree.insert(17);
myTree.insert(16);
myTree.insert(20);
myTree.insert(18);

//Recursion, visualize it with this pic:
// https://assets.leetcode.com/users/images/523c99f4-e3ae-4123-8454-aef6f81f69fd_1644824385.5203114.jpeg

//At a specific node, we have leftSubtree & rightSubtree;
//one subtree will be deeper than the other, so the max depth from
//the perspective of our node will be the depth of the longer sub-branch + 1
//(you add 1 as you need to add the level of our node as well);
//maxDepth of a node = Max ( maxDepth(node.left), maxDepth(node.right) ) +1

//When doing recursion, it will quickly  go to the base scenario which is when
//you reach a leaf node;
//maxDepth of a leaf node = Max ( maxDepth(null), maxDepth(null) ) +1;
//but maxDepth(null) will return 0 , so maxDepth of a leaf node = Max (0,0 ) +1 = 1;

//Cool, so recursion will bubble down up to the leaf nodes & when it will bubble up
//1st time it wll come up with value 1; and as it keeps bubbling up through the stack
//we keep on adding +1 each time; So as we keep on adding 1 from the leaf nodes
//uppwards, we are exactly counting the number of levels; Now, the path which is longer
//will always have had recursion bubble down & up on it a little more, so it will return
//with bigger values;

//Giving the root as the initial node, it will split into 2 subtrees, and due to recursion,
//one of the will bubble up back by returning a bigger value;

const maxDepth = function (root) {
  //Base scenario
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log("Max depth: ", maxDepth(myTree.root));
