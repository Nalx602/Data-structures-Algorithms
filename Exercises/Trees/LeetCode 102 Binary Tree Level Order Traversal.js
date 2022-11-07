// 102. Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
//
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
//         3
//       /   \
//      9    20
//          /  \
//        15    7
//
// Example 2:
// Input: root = [1]
// Output: [[1]]
//
// Example 3:
// Input: root = []
// Output: []
//
// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

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
 * @return {number[][]}
 */
// -----------------------------------------------------------
//One way would be to go and create the BT data structure from the array, then traverse the BT in BFS manner;
//Note: at each level, for each node, store their children in a queue, so that you know where to go where to there

const BinarySearchTree = require("../../Algo Searching//lesson201_204_BFS_and_DFS_Implementation");
//const Queue = require("../../DS Stacks and Queues//lesson121to122_DS_Queues_Implementation");

const myTree = new BinarySearchTree();

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

const levelOrder = function (root) {
  const number = [];

  //in case we have an empty BT;
  if (!root) return number;

  let levelNodes = [root]; //list of nodes at current level;
  let children = [];
  let levelVals = []; //values of each level, to be added to number;

  while (levelNodes.length !== 0) {
    levelNodes.forEach((el) => {
      levelVals.push(el.value);
      if (el.left) children.push(el.left);
      if (el.right) children.push(el.right);
    });

    //And here a little of variable reference manipulation, as the
    //children will become the new node list to take values out of;
    number.push(levelVals);
    levelNodes = children;
    children = [];
    levelVals = [];
  }

  return number;
};

console.log(levelOrder(myTree.root)); //it's .root cause my initial BST is
//encapsulated into an object of type BinarySearchTree

//-----------------------------------------------------------

/*
//If we would have the BT in array form, we can make use of it instead;

const levelOrder = function (root) {
  const number = [];
  if (root.length === 0) return number;

  const lengthArr = root.length;

  // Eg.: root = [3, 9, 20, null, null, 15, 7]
  //  index i  =  0, 1, 2,  3,    4,    5,  6
  //A perfect BT : number of levels = 2** (number of nodes) - 1
  //Our array has "null" positions but you can skip in adding those as you go along;
  //Each level's nodes will have pos index range from (2**levelBT)-1 till (2**(levelBT+1))-2

  //           3            levelBT = 0,
  //       /      \
  //      9       20        levelBT = 1
  //    / \      /  \
  // null null  15  7       levelBT = 2

  const levelBT = Math.floor(Math.log2(lengthArr));

  //for each level, you must take the nodes and put it in "number"
  for (let k = 0; k <= levelBT; k++) {
    //for each level, save the nodes in a list, put it in "number" and make the list empty again
    const currLevel = [];
    for (let i = 2 ** k - 1; i <= 2 ** (k + 1) - 2 && i < lengthArr; i++) {
      //i will go for each level interval but will also make sure is smaller then lengthArr, so
      //that we do not go to unnecessary "null" values from the end of out BT;
      if (root[i]) currLevel.push(root[i]);
    }
    number.push(currLevel);
  }

  return number;
};

const myRoot = [3, 9, 20, 6, null, 15, 7];

console.log(levelOrder(myRoot));
*/
