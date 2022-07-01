// BFS implementation

//Once you are at a node, you need to memorize its children so that we know we have to go
//back and visit them, after we've finished the level we currently are at;
//To keep track of these children, we will use a queue data structure;
//Let's say we are at "6", you put 6's children in the queue (1 & 4) so that, once you
//finish with the nodes from the level where "6" is ( 2nd level), you know which nodes
//will come at next level ( 3rd level);

//You can see this queue can get very large; if we have a really wide tree, the queue can
//get big and the memory consumption will be large also;

//                          9
//                       /     \
//                      6      12
//                    / \     /  \
//                   1   7  11   20

//DFS Implementation

//There are 3 ways that can be immplemented : PreOrder, InOrder, PostOrder
//Remember how you returned a list at BFS? Well, for DFS there are 3 ways
//to return that list based on the DFS traversal.

//         9
//     4      20
//   1  6   15  170

// InOrder :  [ 1, 4, 6, 9 , 15, 20 , 170 ] - it goes from the smallest to biggest elem in BST;
//Looking at subtree 1 -4 - 6, you want to retain  the left child first, then the parent 4, then
//the child on the right 6...this way they become in ascending order. Now you must do this
//recursively : you keep on going down left all the way until the visited leaf most deep and
//most left no longer has any children, then go to parent, then go to the right child; Now...
//does the right child have any left children ? If yes, keep on going left ->parent ->right...
//... and so on recursively until the right no longer has children; Once you did that, you return
//your list with what you gathered and pop out of the recursive function

// PreOrder : [ 9, 4, 1, 6, 20, 15, 170 ] - start with the parent and grab the child nodes left->right
//by going down in the BST ( not by finishing each layer); it is really useful if you want to
//recreate a BST from a list, because each elem from list comes in an easy order to create the BST;
//In this case, very similar with InOrder, you go all the way down and store the parent first,
// then left child then right child...as you pop out ...recursively do the same

//PostOrder : [ 1, 6, 4, 15 , 170, 20, 9 ] - going all the way down, grab the children then grab the parent
//Same as above just that you want to go all the way down and save left child -> right child -> parent
//and do the same thing recursively on & on again;

//Note: DFS is easily implemented with recursion;
//Also, the memory is less used and the stack will be filled in with the recursive called functions
//which will be the height of the tree, not as much as a queue DS like BFS;

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
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return console.log("Root node added as :", newNode);
    }

    let searchingLocation = true;
    let currentNode = this.root;
    while (searchingLocation) {
      if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          searchingLocation = false;
        } else {
          currentNode = currentNode.right;
        }
      }
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          searchingLocation = false;
        } else {
          currentNode = currentNode.left;
        }
      }
      if (newNode.value === currentNode.value) {
        return console.log(
          "Following node exists & will be skipped :",
          newNode.value
        );
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;

    let parentNode = null;
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return [currentNode, parentNode];
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  remove(value) {
    let direction = null;
    let parentNode = null;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode.left === null && currentNode.right === null) {
          parentNode[direction] = null;
          return [currentNode, parentNode, direction];
        }

        if (currentNode.left === null || currentNode.right === null) {
          parentNode[direction] =
            currentNode.left === null ? currentNode.right : currentNode.left;
          return [currentNode, parentNode, direction];
        }

        if (currentNode.left !== null || currentNode.right !== null) {
          let minNode = currentNode.right;
          while (minNode.left !== null) {
            minNode = minNode.left;
          }
          let minNodeValue = minNode.value;
          this.remove(minNode.value);
          currentNode.value = minNodeValue;
          return currentNode;
        }
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        direction = "left";
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
        direction = "right";
      }
    }
    return false;
  }

  breadthFirstSearch() {
    let list = [];
    //it will return a list( array) which contains the elements
    //in the order of the BFS traversal method;

    let currentNode = this.root; //currentNode will be like the position where
    //you are checking at the moment; you start from root;

    let queue = []; //keeps track of the children of the nodes of the level we are at;

    queue.push(currentNode); //so we put the root node in the queue

    while (queue.length > 0) {
      //You have the queue with your nodes, you remove 1st one and save it in
      //currentNode; take its value and save it in your list;
      //before going to the next node in the queue, check if it has any
      //children and add it at the end of the queue;
      //Once there are no more children, the queue will gradually become empty;

      currentNode = queue.shift(); //will remove & return 1st el of the queue
      list.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return list;
  }

  bfsRec(queue, list) {
    //you can see queue and list are not declared, you declare them
    //when you are running the fct as arguments

    //Base scenario - no more children
    if (!queue.length) {
      return list;
    }

    //Recursive scenario - go through the level and store

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    return this.bfsRec(queue, list);
  }

  dfsInOrder() {
    //as with BFS, with DFS we need a starting point in declaring the variables;
    //another way to do it is to make another fct, which will be recursive and you
    //declare in here the starting point
    return traverseInOrder(this.root, []);
  }

  dfsPreOrder() {
    return traversePreOrder(this.root, []);
  }

  dfsPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  console.log(node.value);

  if (node.left) {
    //keep on going down and left recursively
    traverseInOrder(node.left, list);
  }
  list.push(node.value); //when no more left, add the elem to list

  //Once we no longer have left, we want to go to the right
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  console.log(node.value);
  list.push(node.value); //1st store the parent

  if (node.left) {
    //keep on going down and left recursively
    traversePreOrder(node.left, list);
  }
  //Once we no longer have a left child, we want to go to the right
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  console.log(node.value);

  if (node.left) {
    //keep on going down and left recursively
    traversePostOrder(node.left, list);
  }
  //Once we no longer have a left child, we want to go to the right
  if (node.right) {
    traversePostOrder(node.right, list);
  }

  list.push(node.value); //only at the end you save the parent
  return list;
}

const tree = new BinarySearchTree();

//         9
//     4      20
//  1    6  15   170
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log("BFS iteratively :\n", tree.breadthFirstSearch());
console.log("BFS recursively :\n", tree.bfsRec([tree.root], []));

console.log("DFS InOrder :\n", tree.dfsInOrder());
console.log("DFS PreOrder :\n", tree.dfsPreOrder());
console.log("DFS PostOrder :\n", tree.dfsPostOrder());
