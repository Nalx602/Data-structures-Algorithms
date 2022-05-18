// Trees data structure

//They have a hierarchical structure ( compared with Arrays for eg, which are a linear DS );
//It starts with a root node (1) and it can have 0 or more child nodes. 
//A node can only point downwords towards a child;
//As a property, a node can be a child (2,3,4 or 6,7) or parent (1,3) node ;
//A child node only descends from one parent;
//A node can only point downwords towards a child, does not have to point towards its parent;
//Leaf nodes (2,4,6,7) are the at very end of the tree datastructure;
//Siblings (2,3,4 or 6,7) are the nodes on the same level ( hierarchy) coming from same parent;
//A subtree is a group of a tree that follows the same rules ( 3,6,7);
//    1
//  / | \
// 2  3  4  
//   / \  
//  6   7  

// The nodes can contain whatever information we want;
// Eg.: a LL is a type of tree that is on a single line