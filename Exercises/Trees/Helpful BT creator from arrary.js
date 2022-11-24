class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const initializeTree = function (arr) {
  let root = null;
  if (arr.length === 0) return root; //for empty array

  //if arr has at least 1 el, create the root
  root = new TreeNode(arr[0]);
  createTree(root, 0, arr);
  return root;
};

const createTree = function (currNode, i, arr) {
  if (currNode !== null) {
    //for children put to left
    if (2 * i + 1 < arr.length) {
      if (arr[2 * i + 1] === null) currNode.left = null;
      else currNode.left = new TreeNode(arr[2 * i + 1]);
      createTree(currNode.left, 2 * i + 1, arr);
    }

    //for children put to right
    if (2 * i + 2 < arr.length) {
      if (arr[2 * i + 2] === null) currNode.right = null;
      else currNode.right = new TreeNode(arr[2 * i + 2]);
      createTree(currNode.right, 2 * i + 2, arr);
    }
  }
};

const arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1];
//when you create the BT, you must put "null" for every missing node , except the last row

module.exports = initializeTree;
