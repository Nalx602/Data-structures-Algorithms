class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    // 1. in case the tree has no elements & this would be the first node added,
    //then the added node becomes the root
    if( this.root === null) {
      this.root = value;
      return value;
    }

    // 2. Adding a new node:
    //You will have to compare the new node with the root and decide, left or right?
  }

  lookup(value){
    //
  }

  //remove(value){  }
}



const tree = new BinarySearchTree();
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}