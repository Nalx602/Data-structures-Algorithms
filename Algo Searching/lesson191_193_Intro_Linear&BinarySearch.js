//     Searching and Traversal

//Searching fast is very important!

//There are a few types of searching and traversal:
// - Linear Search
// - Binary Search
// - Depth First Search
// - Breadth First Search



// 1. Linear Search

//It sequentially checks each element of the list for the target value until a match 
//is found or until all the elements have been searched.
//You basically, one by one, check each elem if it is the target.

// See below some JS methods to search for a given array

const beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];


console.log (      beasts.indexOf('Godzilla')      );
//Returns the INDEX of the 1st occurence of a value in an array

console.log (      beasts.findIndex(item => item === 'Godzilla')      );
//returns the INDEX of the first element in the array that satisfies the provided testing function

console.log (      beasts.find(item => item === 'Godzilla')      );
//returns the 1st ELEMENT in the provided array that satisfies the provided testing function

console.log (      beasts.includes('Godzilla')      );
//determines whether an array includes a certain value among its entries, returning true or false 

//These methods are based on linear searching, in which the worst case would
//be to go through the entire list; -> time complexity = O(n) which is not great in searching;



// 2. Binary Search

// A better way would be to have the list already sorted;
// 1 4 6 9 12 34 45
//Let's say you want to search for 34 in the above list;
//You can go to the middle ( 9 ), see that your target value is higher than middle
//and discard the elements from the left of the middle; Then we go the middle
//and compare it with your target, discard the elems oposed from target relative
//to middle....and so on ( divide-and-conquer => time complexity is O(log n)

//Instead of an array, this list could be stored in a Binary Search Tree instead;
//this way it is more efficient to keep the data sorted when a new item is added
//to the list and it prepares it for an eventual search; and to do the search,
//you just go to a node and decide if you want to go left or right;

//                          9                                                               
//                       /     \                                                            
//                      4      34                                                           
//                    / \     /  \                                                          
//                   1   6  12   45                                                         

// So linear search is O(n), Binary search is O(log n) but needs sorted data structure;

