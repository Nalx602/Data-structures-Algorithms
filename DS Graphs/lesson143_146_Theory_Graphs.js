// Graphs

//They are a set of values related in a pair kind of fashion.
//Each item is called a Node or a Vertex; Nodes are connected with edges; The nodes can carry of kind of info;
//There are cases in which a node(s) might not be connected with the main graph, that is ok;
//They are great for modelling real world relationships between things;
//Linked lists are a type of Tree, while Trees are a type of Graph; there are many types of graphs;

// Characteristics of Graphs

//     1. Directed/Undirected
//Directed: between 2 nodes there is a direction that needs to be followed in order to reach from one
//to the other; you cannot go the other way on that edge
//Undirected: the edge between 2 nodes is bidirectional; 
//     2. Weight/Unweighted
//In the unweighted graphs, the edges do not hold any information( like a value); in the weighted 
//graphs, the edges have a value ( like a cost to reach from one node to another);
//     3. Cyclic/Acyclic
//A cycle, in the context of a graph, occurs when some number of vertices are connected to one another
//in a closed chain of edges, in a way that you can reach your initial node like in a loop. A graph that contains 
//at least one cycle is known as a cyclic graph. If you have some nodes connected in a loop but the edges
//are directional in a way in which you cannot go back to your start point-> not cyclic;
//Conversely, a graph that contains zero cycles is known as an acyclic graph;

//                       2--------0                                                                                                   
//                      / \                                                                                            
//                     /   \                                                                                           
//                    /     \                                                                                          
//                   1-------3                                                                                         

//When implementing graphs, you kind of have already implemented a subdivison of them with previous data structures
//You can categorize it in 3 ways how you can implement them:

// 1. Edge list
//you just declare the edges in an array, like 0 connected to 2, 2 to 3, 2 also to 1 etc.; don't do duplicates;
const graph1 = [ [0,2], [2,3], [2,1], [1,3] ];

// 2. Adjacent list
//in this one, the index in the array is the node and the value is the node's neighbours;
const graph2 = [ [2], [2,3], [0,1,3], [1,2] ];
//you can't also implement this with an object, in case you either don't have subquential node values or
//the node values are not numbers and cannot be expressed as indexes of an array;

 // 3. Adjacent Matrix
//it will have 0s and 1s, with 0 meaning "no" and 1 meaning "yes" as to 2 nodes having an edge, where the value
//of the 2 node will be mapped as beings the X-Y axis coordinates of the matrix;

const graph3 = [//we've considered the numbering to start from top left of the matrix;
  [0,0,1,0],// 0<->2 has an edge, so we put a "1" at position (0,2) of the matrix;
  [0,0,1,1],
  [1,1,0,1],// 2 has an edge with 0, 1 and 3, hence the three "1"s ;
  [0,1,1,0]
]

//There are other ways to represent grapsh, for example, the above graph3 can be transformed into an object,
//where they key is the node's value & the key's value is the array
const graph4 = {
  0:[0,0,1,0],
  1:[0,0,1,1],
  2:[1,1,0,1],
  3:[0,1,1,0]
}

//Or instead of and Adjacent Matrix with 0s and 1s, you make it with 0s and the weight value instead:
const graph5 = [
  [0,0,12,0],
  [0,0,99,1],
  [20,16,0,81],
  [0,14,56,0]
]
//Or you can make it with a hash table

//Pro 
//it's good to represent relationships

//Cons
//scaling is hard

//There is a library called neo4j which will allow you expand your implementation with graphs
