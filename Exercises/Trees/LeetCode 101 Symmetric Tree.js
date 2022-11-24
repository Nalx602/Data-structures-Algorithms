// 101. Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
//          1
//       /     \
//      2       2
//     / \     / \
//    3   4   4   3
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
//          1
//       /     \
//      2       2
//       \       \
//        3       3
// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Follow up: Could you solve it both recursively and iteratively?

//Creating a BT

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(2);
root1.left.left = new Node(3);
root1.left.right = new Node(4);
root1.right.left = new Node(4);
root1.right.right = new Node(3);

const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(2);
root2.left.right = new Node(3);
root2.right.right = new Node(3);

const root3 = new Node(1);

//Iterative way: 1st you do the initial checks for a single node; Then
//you create 2 stacks; initially you put the root.left & root.right in each stack;
//At each iteration you:
// - as you pop oldest el from stack (FIFO) from each stack, you store it
// - then you check if they are equal; if they are not - return false, not sym
// - then you take the left & right of the popped elems and put them back in the stack
// -

//Iterative way: traverse the BT in BFS manner, extra is to create an array with actual
//values and check if the array is symmetric ( for empty children, put string "empty");
//The "empty" spaces will be compared between them, if arr is to be symmetric;

//Recursive way:
//You split the root in 2 subtrees and you recursively go through both at the same time; How?
// You go in a mirror fashion, if you go left in a subtree then you go right in the other subtree.
//If you go left->right in a subtree, then you go right->left in the other subtree; and you keep
//checking if the values are ok; if the values differ->not symm; or if there is no place
//to go in one side but there is in the other->again not symm;
//At every recursive call, you basically check if the mirrored node differs and then redo recursive
//check with the children in a mirror fashion
// - node.left = node.right
// - node.left.left = node.right.right
// - node.left.right = node.right.left

const isSymmetricRec = function (root) {
  if (!root) return true; // no BT, so symmetric
  if (root.left === null && root.right === null) return true; //single node BT

  return checkSymmetry(root.left, root.right);
};

const checkSymmetry = function (left, right) {
  //The base case is when you reach the null leaf nodes of the 2 subtrees
  if (left === null && right === null) return true;

  if (left === null || right === null) return false; //otherwise check if only one is empty

  if (left.val !== right.val) return false; //if if they are not empty but are not equal also

  return (
    checkSymmetry(left.left, right.right) &&
    checkSymmetry(left.right, right.left)
  );
};
/*
const isSymmetricIter = function (root) {
  if (!root) return true; // no BT, so symmetric
  if (root.left === null && root.right === null) return true; //single node BT

  //if the 2nd row has only a single child - asym BT
  if ((root.left === null && root.right) || (root.left && root.right === null))
    return false;

  // const row = []; //test array to check if its symmetric
  // const childrenNodes = [root.left, root.right]; //this will have the actual children nodes
  // const nextChildren = [];

  // //you stay in this loop until no more children are added because you reached last row
  // while (childrenNodes.length) {
  //   //Add values of children to row
  //   childrenNodes.forEach((el) => {
  //     if (!el) row.push("empty"); //case the child if empty node;
  //     if (el) { //otherwise add the actual value and check for next children
  //       row.push(el.val);
  //     }
  //   });

  //   if (!rowIsSymetric(row)) return false; //Check if row is not symmetric

  //   //If the row is sym, reset childrenNodes and add the next level
  //   childrenNodes = [];
  // }
};

// const rowIsSymetric = function (arr) {
//   if (arr.length % 2 !== 0) return false; //arr is not sym, as it has odd # of elem.
//   for (let i = arr.length / 2 - 1; i >= 0; i--) {
//     //start at middle of arr-> compare elems as you go to its ends;
//     if (arr[i] !== arr[arr.length - 1 - i]) return false;
//   }
//   return true; //must be true if got till here
// };

console.log(isSymmetricRec(root1));
console.log(isSymmetricRec(root2));
console.log(isSymmetricRec(root3));
*/
