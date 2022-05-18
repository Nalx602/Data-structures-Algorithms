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