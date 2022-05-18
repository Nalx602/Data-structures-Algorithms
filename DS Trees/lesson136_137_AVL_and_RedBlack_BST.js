

//                             AVL trees


//info from   https://medium.com/basecs/the-little-avl-tree-that-could-86a3cae410c7

//These are BSTs which are self-balancing;

//  Balanced tree = its 2 subtrees do not differ in height by more than one level.
//( this is usually the agreed max diference between 2 subtrees, but it can be changed higher than 1).
//This difference is called the "balanced factor";

// Height of a tree = the longest path from the root node to one its leaf nodes.
//In a "heigh-balanced tree", no path from root->leaf should be different by more than 1 step; 

// So a balanced BST  = any 2 sibling subtrees ( sibling = originate from same parent and are on same level)
//do not differ in height by more than one level; You have to take this rule recursively, to all nodes throughout the 
//BST, not only referenced to the root node;


//          Balanced                                  Unbalanced                                                       
//               A                level 0                 A                      
//            /     \             -------              /     \                          
//           B       D            level 1             B       C                          
//         /   \    /  \          -------                   /   \                          
//        C     E  F    G         level 2                  D     E                        
//                  \             -------                   \                            
//                   H            level 3                    F               
//                                                                 
//   In the balanced tree, you can see that any subtree you choose, its sibling have max +-1 in height difference;
//for eg: node D has 2 subtrees, on the left 2 levels(with nodes F & H) and on the right 1 level ( only node G);
//   In the unbalanced tree, if you take node C, it has left subtree with 2 levels (with D & F) and 
//right subtree with 1 level ( with E), so it should be balanced, right? Wrong -> look at node A, it has left
//subtree with 1 level ( with B) and right subtree with 3 levels( with C, D+E and F); so this is an 
//unbalanced BST, as there is at least one part of the tree unbalanced;

// Another example:
//                 C                                                
//             /      \                                              
//           A          D                                            
//             \          \                                          
//              B          F                                         
//                        /                                         
//                      E                                          
//If you look at this one, leafs B and E only differ by 1 in respect to the path from the root node;
//So is this a balanced tree? Well, no, yet again all sibling subtrees need to be balanced but if you take
//the node D, it has a subtree on the right ( with 2 levels, F and E) and one on the right with zero levels
//( zero levels means is an empty subtree, has no nodes);

//   How are you balancing the subtrees?

//Basically they are just some fancy node swapping methods, which are being called "ROTATIONS";
//2 types of rotations: Single Rotations and Double Rotations 
//from here you should read from the website

//Single rotations : left rotation and right rotation
// left rotation = if a node is inserted into the right subtree of a right subtree and causes the
//tree to become unbalanced
// right rotation = if a node is inserted into the left subtree of a left subtree and causes the
//tree to become unbalanced

//Double rotations: sometimes, however, a single rotation just won’t cut it. In those scenarios, 
//desperate times call for double rotations: namely, either a 
//left-right rotation = left rotation followed by a right rotation
//right-left rotation = right rotation followed by a left rotation





//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------





//                            Red-black trees

//better check  https://medium.com/basecs/painting-nodes-black-with-red-black-trees-60eacb2be9a5

//They are a type of self-balancing BSTs that adhere to 4 strict rules in order to maintain
//O(log n) time complexity for searching, inserting or deleting a node.

//The rules:

//  1.Every single node in the tree must be either red or black.

//  2.The root node of the tree must always be black.

//  3.Two red nodes can never appear consecutively, one after another; a red node must always be 
//preceded by a black node (it must have a black parent node), and a red node must always have 
//black children nodes ; basically, from a red node, you can travel up and down by landing on
//black nodes; A "null" leaf node is always considered to be a black node, not red.

//  4.Every branch path — the path from a root node to an empty (null) leaf node — must pass through
//the exact same number of black nodes. A branch path from the root to an empty leaf node is also 
//known as an unsuccessful search path, since it represents the path we would take if we were to 
//search for a node that didn’t exist within the tree. 

// Notes(!):
// - you will find out that a chain of 3 nodes cannot possibly ever be a valid red-black tree, however
//you would color them( as they either violate rule#3 or rule#4 );
// - when inserting a node, before assesing the 4 rules, it is a good advice to make it as standard
//with the colour red and after that, try & subsequently fix the violations that appear;
// - to combat violations, you will need to recolour and/or rotate the nodes;
// - another good advice is to fix the violations first at the bottom of the tree and push the
//violations up the tree as we go;

// Comparing them to AVL
// - they both have O(log n) for search/insertion/deletion but there are some differences;
// - compared to AVL trees, red-black trees are less-perfectly balanced. However, we generally need 
//fewer rotations during insertion/deletion with a red-black tree, which makes red-black trees 
//superior for growing or shrinking a free, but less efficient for searching compared to AVL trees.
// - the fact that the red-black trees have to store the colour information is not much of a space
//usage, as it can be stored in one bit.