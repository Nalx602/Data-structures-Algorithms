// LINKED LISTS

//There are 2 types: singly & doubly linked lists (LL)

//It contains a set of nodes; the nodes have 2 elements= the value + the pointer;
//The pointer will indicate the location in memory of the next node's value address;
//The first node of a LL is called the head, the last one is the tail;
//The LL are 'null' terminated, as the pointer of the tail will point towards 'null';
//When null is reached, you know you reached the end of the LL;

// Pseudo-code
// linked list = apples --> grapes --> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

//JS doesn't come with LL built in; Java has LL;
//As we don't have LL in JS, we can build one;

//    The case for LL: LL have a kind of loose structures; they usually are to be saved in 
//a scattered memory space, not like arrays; Also they don't have continuous indexing like arrays;
//    Advantages over Arrays: 
// - when you need to add/remove an item(node) at a place, you have to go up to that position,
//remap the pointers there and stop; Compared with arrays where you had to
//re-index each element up to the end, LL don't have to traverse all the way to its tail;
//    Disadvantage over Arrays:
// - if you need to get a specific elem in an Array ( like 5th elem), you just call it and
//it will be available  O(1); but in LL, if you need 5th elem, you need to traverse the entire LL;
// - array elem are always next to each other when saved in memory, compared with LL; for this
//reason, iterating an entire array will be faster then traversing a LL of the same length;

// Prepend = O(1) ; Append= O(1); 
// Lookup = O(n); Insert = O(n); Delete = O(n);

// POINTER
// It's simply a reference to a place in memory, or another object or another node etc...
// const obj1 = {a:true};
// const obj2= obj1 ;// this is an example of a pointer in JS; in here obj2 is not a like for like of
//obj1 but a shallow copy of it; obj1 will have a place in memory where its value is saved;
//obj2 will reference (have a pointer) to the same memory location;
//In case you delete obj1, you still gonna have the memory location unchanged as there is
//still a pointer referencing it, which is obj2. Only now, if you change obj2 to something
//completly different (like a string), the memory location will be erased by the CPU as it is
//no longer referenced by anything ( this process is called garbage collection);
//There are other programming languages like C, which are not garbage collection-able and the 
//memory has to be manually cleared.