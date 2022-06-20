//Hash tables; they are the:
// - objects in JS
// - dictionaries in Python
// - maps in Java
// - hashes in Ruby 
// etc

// When you have an array and you want to retrieve an elem, you either have to search
//for it  (it will be O(n) ) or know its index. The hash table comes to help in
//regards with the searching option of arrays.

// Imagine having an array and having its indexes somehow corelated with the value
//stored at that index. If you would look for something, you immediately would know at what
//index it is stored. But you cannot use the number indexes from array. To be useful, you
//replace the number indexes with something familiar, like a key;

//To make the correlation, the key will be run through a hash function which will
//give a random number as output (a hash) which will be fairly unique to that value ( not always);
//This output is called the hash and with it, you can manipulate it in order indicate a 
//memory address in the RAM;

// What hash table do, they go a bit furhter & store a collection of (key, value) pairs & use 
//the key as an index; when the key is mentioned -> the value will be easily retrieved.
//To make the correlation, hash tables use the hash functions with the output as random
//number based on the input (which will be the key).

//Let's say you need to store the info that you have 10 grapes. In a hash table, you declare
//the key = 'grapes'. This key will be hashed and a random number will be created. Based
//on this random number the CPU will make some algorithms and get to a specific memory address;
//At this memory address it will be decided to have the key:value pair stored.
//So next time when I want to know about grapes, the PC will take the key, calculate
//the hash with it and straight away go to the memory on RAM where key:value is saved (grapes:10).
//You can see the advantage of using hashing is that the table address of a record can be 
//directly computed from the key;

//The hash function will be the one that will take some computational cost. But to retrieve, insert, search or delete will be in general O(1);

//Some example

let user = {
  age:54,
  name:'Kylie',
  magic:true,
  scream:function(){
    console.log('ahhhh');
  }
}

console.log(user.age); //This will be O(1)
user.scream();//also O(1);
console.log( user.hasOwnProperty('age') );//also O(1)

// COLISIONS

//One of the main problem, 2 keys might give the same output (hash), so the key/value pair
//might be represented by the same memory address. This is called a collision. The two common 
//methods for collision resolution are separate chaining and open addressing.

//In the case of chaining, the collided items are chained together through a single linked list,
//which can be traversed to access the item with a unique search key. Of course, when you will
//want to retrieve a collided item, you will go to the key -> and start hopping through the 
//linked list -this will slow down the reading & writing of the hash table with O(n/k). k is the
//size of the table ( constant) so Time complexity will go to O(n); So sometimes, lookups
//might take O(n);

//In open addressing, if a collision occurs, the last elem will be placed in the next avail place
//in the hash table. When you want to look for that elem again, then you will need to go its calc
//index (memory address) and start hopping again ( takes time again);

// Other kind of hash tables in JS
//In Js, the keys will be stringified ( so numbers of fcts will be converted to texts)

//MAP - the map allows the keys to be any data type; also mentains insertion order compared to 
//objects;

 const a = new Map();

//SET - similar with MAP but only stores keys;
const b = new Set();



//          Conclusion:
//It is very common to use hash tables in interviews; It solves the problem
//of nested 'for' loops which gives you the O(n^2) time complexity; but there is a trade-off for memory
//as you copy data in a new space in RAM;
//  PROs:
//They have really fast lookups( as long as the prog language has a good collision resolution);
//They have fast insertion & deletion; Also it has flexible keys ( using customazible keys instead of 
//numbers like Arrays have);
//  CONs:
//they are unordered; and also has slow key iteration ( if you want to get all the keys from a hashTablee);
//due to collisions, worst case scenarios might get you a O(n) time complexity;















