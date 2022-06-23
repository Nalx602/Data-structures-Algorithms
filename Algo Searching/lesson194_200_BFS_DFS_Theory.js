// Graph and Tree Traversals


//     Traversal
//It refers to the method in which you need to visit the elements of a data structure
//in order to do an operation or a check on them.

//For example, the search in a sorted array, you need to go left or right based on the
//current value of middle...this is a way of traversal. But you need to go through
//all of the elem of the array? No.

//Maybe you need to go and assign an extra attribute to some nodes in a tree; Like,
//besides values you need to associate a colour to them; How would you visit the 
//nodes?...maybe you need to make sure you go through all nodes, in order
//to do your operation? Maybe you need to check if a stored BST has its nodes 
//actually following the rules of a BST...how would you do that?


//So, when it comes to traversal of Trees and Graphs, it is required always
//to visit all the nodes. This will give O(n) time complexity in finish 
//visiting all the nodes. But, Trees and Graphs give us the advantage
//of O(log n) when it comes to searching. So it is efficient to have an
//already sorted Tree/Graph data structure in which you store your complex data
//and, as a result, the searching will be fast.



// In case of Trees and Graphs Data structures, we have 2 types of traversals:

// 1. Breadth First Search (BFS)
// 2. Depth First Search (DFS)


//  BFS 

//You start with the root note and move left to right across consecutive levels.
//Root node -> then move left to right across the 2nd level, move to 3rd level
//starting from left to right ... & you keep going until you find the searched 
//node or the tree ends;
//BFS uses additional memory because it is necessary to track the child notes of all
//the nodes on a given level, while searching that level.

//  DFS

//The search follows one branch of the tree down as many levels as possible, until the
//target node is found or the end is reached. When the search can't go on any further, 
//it goes back to the nearest ancestor with an unexplored child.
//Now, DFS has a lower memory requirement than BFS because it's not necessary to 
//store all the child pointers at each level;
//The idea with DFS is that we want to go as deep as possible into the tree, usually
//starting from the left side, and then start going to the right until the traversal
//of the tree is done. But, ss the name suggests, we need to go depth first.


//                          9                                                               
//                       /     \                                                            
//                      4      34                                                           
//                    / \     /  \                                                          
//                   1   6  12   45  

// BFS = [9, 4, 34, 1, 6, 12, 45 ]
// DFS = [9, 4, 1, 6, 34, 12, 45]

//               BFS            vs         DFS

//They both have O(n) time complexity but each is used for different reasons;

//BFS can find the shortest path between 2 nodes; as it traverses the nodes
//layer by layer it will reach closer nodes sooner; but it does consume more memory;
//So when you have a target that you know is in the top half of the tree, then
//use BFS;

//DFS is opposite; if you know a target is most likely to be at the end of a
//tree, with DFS you might be faster; Also consumes less memory; it also answer the
//question if a path exists between a source node to a target node; The downside
//is DFS can get really slow, especially if the tree is deep;


// Exercise on what to choose

//If you know a solution is not far from the root of the tree: BFS
//If the tree is very deep and solutions are rare: BFS (DFS will take long time)
//If the tree is very wide: DFS (BFS will need too much memory)
//If solutions are frequent but located deep in the tree: DFS
//Determining whether a path exists between two nodes: DFS
//Finding the shortest path: BFS