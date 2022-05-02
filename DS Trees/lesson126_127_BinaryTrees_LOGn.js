//                Binary trees (BT)

//   Rules:
// Each node can only have 0,1 or 2 children;
// A child can only have one parent;
// Each node represent a specific state;

//  "Full BT" = each node has either 0 or 2 children (that is it)
//       x
//     /   \        
//    x     x          
//   / \               
//  x   x
//     / \        
//    x   x

//  "Perfect BT" = each node has either 0 or 2 children (never 1 child) & also the 
//bottom layer of the tree is completely filled with nodes ( compared with full BT);
//       x
//     /   \
//    x     x
//   / \   / \
//  x   x x   x
//Properties of perfect BTs:
//-the number of nodes doubles each level as we go down the BT;
//-the # of nodes at last level = total # of nodes on previous levels + 1 ( last level ~ half of the BT);
//So you can see a lot of data is saved in the bottom layer;
//If you can avoid visiting each node, then you would be very efficient in finding your search;
//You can start from the root node and, based on a decision making ( going left or right), you 
//would keep narrowing down your search; with every step you take, you keep on skipping the need of looking
//at more and more nodes; So you can already see this kind of search if faster than linear time O(n) like
//searching through an array;

//-number of nodes / layer :
//Level 0 : 2^0 = 1
//Level 1 : 2^1 = 2
//Level 2 : 2^2 = 4
//Level 3 : 2^3 = 8
//Total # of nodes = 2^h -1 = 2^4 - 1 = 15 ( h= height of the perfect BT, in our case 4 levels or 4 steps)

//The relation between # of nodes vs. # of steps is logarithmic ( log 16 = 4 ); ( we are ignoring the minus 1 here :) 
//If you would need to store 100 nodes -> log 100 =10 -> so a tree of 10 steps -> a search would take 10 iterations ( very cool)
//In conclusion, this perfect BT has a logarithmic time complexity  O(log(n))

//How to represent it?
function BinaryTree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}