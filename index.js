class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);//creating a new node

    // 1. in case the tree has no elements & this would be the first node added,
    //then the added node becomes the root
    if (this.root === null) {
      this.root = newNode;
      return console.log('Root node added as :', newNode);

    }

    // 2. Adding a new node:
    //You will have to compare the new node with the root and decide, left or right?
    //Also, if an existing node = added node -> give error ;
    //When a node is added, it will always end at the end of some branch, as it's not self balancing;
    //You stop when, after the decision to go left/right, the parent node no longer has a child;
    //How do you traverse the tree ?
    //You will have to store a currentNode, with which you will compare the newNode;
    //Initially the currentNode will be the root; then, based on the decision, the current node will
    //become the next node

    let searchingLocation = true; //flag to check if we found the location of the new node, will become
    //false when we found where to place the node;

    //Setting the currentNode as the root node
    let currentNode = this.root;

    console.log('-------------------------');
    while (searchingLocation) {
      //If newNode has to go to right
      if (newNode.value > currentNode.value) {
        //If currentNode.right is empty, then you found the place to put the newNode        
        if (!currentNode.right /*or equal to null*/) {
          currentNode.right = newNode;
          searchingLocation = false;//you break the loop
        } else {
          //if currentNode.right has also a node, you have to move currentNode to it, so
          //that the newNode will be compared with it in the next loop;
          currentNode = currentNode.right;
        }
      }

      //If newNode has to go to left
      if (newNode.value < currentNode.value) {
        //If currentNode.left is empty, then you found the place to put the newNode        
        if (!currentNode.left) {
          currentNode.left = newNode;
          searchingLocation = false;//you break the loop
        } else {
          //if currentNode.left has also a node, you have to move currentNode to it, so
          //that the newNode will be compared with it in the next loop;
          currentNode = currentNode.left;
        }
      }

      //If newNode == with current node;
      if (newNode.value === currentNode.value) {
        return console.log('Following node exists & will be skipped :', newNode.value);
      }
    }
    console.log(this.root);
    console.log('-------------------------');
  }

  lookup(value) {
    //1st you check if the current node's value is your value; if yes -> found the value;
    //if not, you check if the current node has any children; if none, the value is not in BST (you reached end of a branch);
    //if yes (1 or 2 children), you decide to go left/right but first checking if there is a left/right;
    //Why do this check again? Cause you might have tree like below and look for node 170;
    //When you reach node 20, you must compare 20 with 170 -> you must go right (20 has 1 child to the left), but 
    //there is no right, so you come to conclusion you reached end of a branch & did not find your node;
    // //     9
    // //  4     20
    // //1  6  15  

    if(!this.root) return false; //checking if there is no BST first;
    
    let currentNode = this.root;

    // while (true) {//Breaking out of the loop with "return";
    //   if (currentNode.value === value) {
    //     return true;//the node was found;
    //   } else if (currentNode.left === null && currentNode.right === null) {
    //     return false;//you reached the end of a branch;
    //   } else if (currentNode.value !== null && currentNode.right !== null && value > currentNode.value) {
    //     //if searched value is higher and there is a branch to the right, then go right
    //     currentNode = currentNode.right;
    //   } else if (currentNode.value !== null && currentNode.left !== null && value < currentNode.value) {
    //     //if searched value is lower and there is a branch to the left, then go left 
    //     currentNode = currentNode.left;
    //   } else return false;
    // }

    // A  nicer way to do this is to do "while(currentNode)"; this way, at the begining of each loop, you  
    //check if the currentNode ended on a "null" spot while in previous loop, meaning end of the branch; 

    while(currentNode){
      if(value === currentNode.value){
        return currentNode;//we exit the function here;
      } else if (value < currentNode.value){//move left
        currentNode = currentNode.left;
      } else if (value > currentNode.value){//move right
        currentNode = currentNode.right;
      } 
    }
    
    return false;//if the currentNode was not returned in the while loop and the loop 
    //ended because currentNode ended on null, then you can return false( meanining no node was found);
  }

  //remove(value){  }
}



const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(10);
// tree.insert(12);
// tree.insert(8);
// tree.insert(7);


tree.insert(9);
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log('\n\nPlease see your lookup result : \n\n',tree.lookup(89));

//console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

// function traverse(node) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }