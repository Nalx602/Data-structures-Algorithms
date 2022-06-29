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
      return console.log('Root node added as :', newNode);

    }
    
    let searchingLocation = true; 
    let currentNode = this.root;
    while (searchingLocation) {
      if (newNode.value > currentNode.value) {
        if (!currentNode.right ) {
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
        return console.log('Following node exists & will be skipped :', newNode.value);
      }
    }
  }

  lookup(value) {
    if(!this.root) return false; 

    let parentNode = null;
    let currentNode = this.root;
    while(currentNode){
      if(value === currentNode.value){
        return [currentNode,parentNode];
      } else if (value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } 
    }
    
    return false;
  }

  remove(value){
    
    let direction = null;
    let parentNode = null;
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.value === value){

        if(currentNode.left === null && currentNode.right === null){
          parentNode[direction] = null;
          return [ currentNode,  parentNode, direction];
        }

        if(currentNode.left === null || currentNode.right === null){
          parentNode[direction] = (currentNode.left === null) ?  currentNode.right : currentNode.left;
          return [ currentNode,  parentNode, direction];
        }

        if(currentNode.left !== null || currentNode.right !== null){
          let minNode = currentNode.right;
          while( minNode.left !== null ){
            minNode = minNode.left;
          }
          let minNodeValue = minNode.value;
          this.remove(minNode.value);      
          currentNode.value = minNodeValue;
          return currentNode;
        }
        
      } else if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
        direction = 'left';
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
        direction = 'right';
      }     
    }
    return false;    
  }

  breadthFirstSearch(){
    let list = [];
    //it will return a list( array) which contains the elements 
    //in the order of the BFS traversal method;
    
    let currentNode = this.root;//currentNode will be like the position where
    //you are checking at the moment; you start from root;
    
    let queue = [];//keeps track of thex children of the nodes of the level we are at;

    queue.push(currentNode);//so we put the root node in the queue

    while(queue.length > 0){
      //You have the queue with your nodes, you remove 1st one and save it in
      //currentNode; take its value and save it in your list;
      //before going to the next node in the queue, check if it has any 
      //children and add it at the end of the queue;
      //Once there are no more children, the queue will gradually become empty;
      
      currentNode = queue.shift();//will remove & return 1st el of the queue
      list.push(currentNode.value);
      if(currentNode.left)  queue.push(currentNode.left) ;
      if(currentNode.right)  queue.push(currentNode.right) ;
      }

    return list;
    }

  bfsRec(queue, list){
    //you can see queue and list are not declared, you declare them
    //when you are running the fct as arguments    

    //Base scenario - no more children
    if (!queue.length){
      return list;
    }

    //Recursive scenario - go through the level and store 

    let currentNode = queue.shift();
    list.push(currentNode.value);
    
    if(currentNode.left)  queue.push(currentNode.left) ;
    if(currentNode.right)  queue.push(currentNode.right) ;
    
    return this.bfsRec(queue, list)
  }

  
}

const tree = new BinarySearchTree();

//         9               
//     4      20            
//  1    6  15   170                                   
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)


console.log( tree.breadthFirstSearch() );
console.log( tree.bfsRec([tree.root] , []) );

//test