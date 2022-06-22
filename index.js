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
//to visit all the nodes -> this will give O(n) time complexity in finish 
//visiting all the nodes. But, Trees and Graphs give us the advantage
//of O(log n) when it comes to searching. So it is efficient to have an
//already sorted Tree/Graph data structure in which you store your data
//and, as a result, the searching will be fast.


// In case of Trees and Graphs Data structures, we have 2 types of traversals:

// 1. Breadth First Search (BFS)
// 2. Depth First Search (DFS)