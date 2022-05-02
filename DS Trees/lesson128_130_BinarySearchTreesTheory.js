// Binary Search Tree (BS)

//They are a subset of a BT;
//It preserves relationships;

// Rules:
// 1. All the child nodes to the right of the root node must be greater than the root node; 
//and if you go to the left, they will be smaller; so if I keep on going to the right, I will always find
//bigger nodes ( and smaller if I go to the left); 
//This rule will be preserved for all the parents nodes also ( all subtrees are also BST)

//         101
//      /      \
//    33        105
//   /  \      /   \
//  9    37  104   144

// 2. A node can only have up to 2 nodes, as this is a BT;

//The advantage of a BST : let's say you want to find the node with value 37;
//You go to the root node, is 37 bigger or smaller than 101? Smaller -> you go to the left;
//you reach node 33 & 37 is bigger than 33 -> you go to the right; so you keep on doing
//this until you find your node; You can see the search is O(log n);

//To insert or delete a node, it will be also O(log n), because you have to preserve the rule #1 
//and have to reorder the nodes in the tree;

//One issue with BST is the fact that it can get unbalanced very easy. Unbalanced
//means that you keep on adding/removing elements and some branches become much deeper/shallower relative to
//the root node; Imagine adding 145, 146, 147 ...up to 160, in the exampled BST. You would have to keep
//on adding the nodes to the bottom right each time and you would keep on adding a step each time.
//If the data is very big, the BST might look more like a LL instead of the BST and the search itself
//can become less efficient, in worst case scenarios going to O(n); 

//With specific algorithms, there are balanced BSTs, in which the left and right side of the BST keeps on
//self-balancing in case the # of steps between them is greater than 1; (eg: left side has 3 steps, right side
//has 5 steps -> reorganize the right side to have 4 steps); The self-balancing algorithms are not usually
//asked at interviews, as are complicated and elaborate and take a lot of time;

//  Pros of BSTs:
//- all operations are better than O(n) (except unbalanced BSTs where it can get to O(n));
//- the nodes are ordered;
//- it's flexible memory wise (uses pointer-type of referencing)

//   Cons:
//- no O(1) operations

//Compared to an array, the lookup will be faster; insert/delete will be also faster ( except adding to the end);
//Compared to a hash table, we have advantage to have the data sorted;
//The BSTs aren't the fastest but they do a lot of this pretty good;