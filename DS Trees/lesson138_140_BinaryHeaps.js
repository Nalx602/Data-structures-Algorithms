//      Binary Heaps (BH)
// info also from   https://medium.com/basecs/learning-to-love-heaps-cef2b273a238

//BHs are another type of trees; they have 2 rules

//1. In a BH, every child belongs to a parent, parent which is >=
//in priority/value than all of his descendents; this is called max-heap;
//If the rule is that the parent's value is <= than his children, it's called a min-heap;
//Notes: 
//a) taking our parent, a sibling node on the same level might have in his descendents a node 
//which a higher value than our parent;
//b) a BH can have duplicates; also the left node does not have to be smaller than the right node 
//like in BST, when we refer to 2 siblings;
//the root node will have the maximum/minimum value from the BH ( useful)

//A BH must be a complete binary tree; what is a complete binary tree? it is a tree in which:
// - the subtree made from all levels except last one = perfect binary tree
// - the last level must have the leaf nodes added from left to right ( no gaps) 

//Eg: (in brackets is the index if we would traverse it from top->bottom, left->right)
//                  101(0)                                                                 
//               /        \                                                               
//             72(1)      33(2)                                                          
//            /   \        /   \                                                        
//          2(3)  45(4)  5(5)  1(6)                                                      

//Why use them?
// In heaps you cannot do O(1) when doing random access, like arrays; we have to do some sort of traversal;
//When doing a lookup, we will have O(n), as there is no order in the BH ( if you want to look for
//45, you will have to keep on traversing from the top to the bottom on every branch);
//BH are really good at comparative operations; BH are partially sorted data structures;
//there is an element of “ordering” to them, but they’re also not completely sorted in the way that a BST is;
//Heaps are used in any algorithm in which ordering is important; they are commonly used with priority queues;

//Priority queues: they are not the same thing as queues; it is a type of data in which each elem has a priority;
//Elements with a higher priority are served before elements with lower priorities; if elements with the same 
//priority occur, they are served according to their order in the queue.

//When you add elements to the BH, you add them from bottom level  left ->right; then the elements keep
//moving upwards if they are greater ( if they should be on upper levels, because they are higher) & it
//keeps bubbling up; in this way the BH is always a perfect tree ( except the lowerest level, which keeps on
//having nodes being added to him); 
//When growing a heap, we can only ever add a node to the left-most available spot in the tree; that is to 
//say, the left most available node, at the lowest possible level. If we are talking about a max-heap,
//and the newly added node is higher than it's parent, we swap the nodes;

//When it comes to removing elements, you can only remove the root element; but what node needs to come
//back in his place? You cannot start comparing stuff down, as you might disrupt the complete binary tree form
//of the BH; instead of the root node you put the right-most node from the lowest level; then you swap stuff
//down; the new root will have 2 children, if the root is lower than any of them, swap with that one; if
//root is lower than both of its children, then swap with the bigger child...and trickle down; you stop until
//both children are smaller than parent or you reach end ( with children = null);
//Note: imagine you delete node after node after node... as you extract the largest elem of the remaining nodes,
//you will have a list of ordered elements (in this case from largest to smallest); this is Heap Sort; 

//Heapify - watch https://www.youtube.com/watch?v=HqPJF2L5h9U&ab_channel=AbdulBari from minute 42:10 onwards

// Time complexity
// lookup = O(n) - you have to go through all elements - you don't use BH for lookups :))
// insert = O(log n) //cause you only go through one branch
// delete = O(log n) //cause you only go through one branch

//How to implement them
//You can implement them the regular way, with objects but there is more interesting and easier way: arrays!
//You can imagine traversing the BH from top->bottom, left-> right and put an index on them; this index
//can be the index of an array; because it's a complete binary tree it assures there will be no gaps while
//assigning the indexes;
// You cannot have a BH like below because is no longer a complete binary tree;
//                  101(0)                                                                 
//               /        \                                                               
//             72(1)      33(2)                                                          
//            /           /   \                                                        
//          2(3)        5(4)  1(5) 

//What’s super interesting is that, if we know the index of the root node, we can manipulate that index in
//order to determine where its child nodes would be located within that same array representation of the heap.

//   If parent -> at index i:
//left child -> at index 2i+1 
//right child -> at index 2i+2

//We can also determine the index of a node’s parent by subtracting 1 from the current node’s index, n, dividing
//it by 2, and finding the floor of that number
//index of parent =⌊(n-1)/2⌋

//Implementation of a maxHeap

class newNode {
  constructor(value, arr) {
    //arr will be the heap to which we want to add the node
    this.value = value,
      this.index = arr.length//the added node will be at index = lenght of 
    //the existing heap, as we start counting from zero
  }
}

class maxHeap {
  constructor() {
    this.heap = []
  }

  swap(arr, indexParent, indexChild) {
    //method to swap 2 positions in an array
    let temp = arr[indexParent];
    arr[indexParent] = arr[indexChild];
    arr[indexChild] = temp;
  }

  parentOf(indexChild) {
    return Math.floor((indexChild - 1) / 2);
  }

  leftChildIndex(indexParent) {
    return 2 * indexParent + 1;
  }

  rightChildIndex(indexParent) {
    return 2 * indexParent + 2;
  }

  insert(value) {
    //when the heap is empty
    if (this.heap.length === 0) {
      return this.heap[0] = value;
    }

    //if the heap is not empty, you have to add values at the very end of the array and keep
    //on comparing the addedNode with its parent and swap it ;

    const addedNode = new newNode(value, this.heap);
    this.heap.push(addedNode.value);//adding the new node at the end of the array

    while (addedNode.value > this.heap[this.parentOf(addedNode.index)]) {
      const newIndexAddedNode = this.parentOf(addedNode.index);//we have to know in which place 
      //the addedNode will end up, so that, in the next loop, you know where continue comparing from;
      this.swap(this.heap, this.parentOf(addedNode.index), addedNode.index);
      addedNode.index = newIndexAddedNode;
    }
    return this.heap;
  }

  pop() {
    //only the root node will be removed, you must put the lowest level, right most elem in the root;
    //basically the last elem from array;

    if (this.heap.length === 0) return null;//in case there are no elem in the heap

    const maxNode = this.heap[0];//saved the max elem
    this.heap[0] = this.heap.pop();//moved last elem to position 0 & also removed it from last position

    //Now we have to reorder the BH
    let tempIndex = null;
    let unorderedNode = new newNode(this.heap[0], []);//you want unorderedNode to be of index=0, that is
    //why we put 2nd argument as an empty array;

    //while our unordered node still has at least a child bigger than him, stay in the loop
    while (unorderedNode.value < this.heap[this.leftChildIndex(unorderedNode.index)] ||
      unorderedNode.value < this.heap[this.rightChildIndex(unorderedNode.index)]) {
      
      if (unorderedNode.value < this.heap[this.leftChildIndex(unorderedNode.index)] &&
        unorderedNode.value < this.heap[this.rightChildIndex(unorderedNode.index)]) {
        //enter here in case both children are bigger than unorderedNode
        if (this.heap[this.leftChildIndex(unorderedNode.index)] > this.heap[this.rightChildIndex(unorderedNode.index)]) {
          //if left child is > right child
          tempIndex = this.leftChildIndex(unorderedNode.index);
          this.swap(this.heap, unorderedNode.index, this.leftChildIndex(unorderedNode.index));
          unorderedNode.index = tempIndex;
        } else { //right child is bigger than left child
          tempIndex = this.rightChildIndex(unorderedNode.index);
          this.swap(this.heap, unorderedNode.index, this.rightChildIndex(unorderedNode.index));
          unorderedNode.index = tempIndex;
        }
      } else if (unorderedNode.value < this.heap[this.leftChildIndex(unorderedNode.index)]) {
        // now these 2 cases are when only one child is bigger than unorderedNode
        tempIndex = this.leftChildIndex(unorderedNode.index);
        this.swap(this.heap, unorderedNode.index, this.leftChildIndex(unorderedNode.index));
        unorderedNode.index = tempIndex;
      } else {
        tempIndex = this.rightChildIndex(unorderedNode.index);
        this.swap(this.heap, unorderedNode.index, this.rightChildIndex(unorderedNode.index));
        unorderedNode.index = tempIndex;
      }
    }

    return [maxNode, this.heap];
  }


}

const myHeap = new maxHeap;
myHeap.insert(101);
myHeap.insert(180);
myHeap.insert(180);
myHeap.insert(34);
myHeap.insert(67);
myHeap.insert(200);
myHeap.insert(210);
myHeap.insert(220);
myHeap.insert(240);
myHeap.insert(80);

console.log(myHeap);

console.log(myHeap.pop());
console.log(myHeap.pop());
console.log(myHeap.pop());

console.log(myHeap.pop());
console.log(myHeap.pop());



