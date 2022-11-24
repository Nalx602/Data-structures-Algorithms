// 226. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
//----------------------------------------

//So basically visit every node of the BT and interswap its children;
//then, for each of the 2 children, you redo the algorithm so that it swaps its
//underlying children

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root1 = new Node(4);
root1.left = new Node(2);
root1.right = new Node(7);
root1.left.left = new Node(1);
root1.left.right = new Node(3);
root1.right.left = new Node(6);
root1.right.right = new Node(9);

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(2);
root2.left.right = new Node(3);
root2.right.right = new Node(3);

const root3 = new Node(1);

const invertTree = function (root) {
  if (root === null) return root;

  //swap children
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  //Then recursively do this for both subtrees
  invertTree(root.left);
  invertTree(root.right);

  return root;
};

console.log(invertTree(root1));
