// Stacks and Queues (S&Q)
//They are both called linear data structures
//They allow us to traverse  data elements sequentially, one by one.
//You can only access the first or last elem of the data structure.
//Unlike arrays and link lists, we have less methods or less actions 
//that we can perform on stacks and queues.


// Stacks
// It is of type LIFO( last in, first out);
// eg of stacks = browser history ( when you hit back, it will return the last page);
//Methods: pop( add an el), push(remove last el), peek( look at last el) all with O(1)

//Queues
// It is of type FIFO( first in, first out);
// eg of queues = a printer prints task in a queue order fashion;
//Methods: enqueue( add an el), dequeue(remove the firstmost el), peek( check the first el
//to come out of the queue) all with O(1);
//Not advised to use arrays when building a queue because cause when you want to dequeue, you
//would have to reindex the entire array and it becomes an O(n) operation;

//We don't usually do lookup with S&Q

//How to build them

//Stacks: you can build them with both Arrays or Linked-Lists;
//The advantage of arrays is that the saved data will be next to each other in the memory 
//and so it will be a little bit faster than a LL; the disadvantage is the array allocates the
//quantity of memory dinamically and if the stack becomes bigger than the allocated size of the 
//array, then the array has to double in memory size. 
//The advantage of the LL is that they solve the problem of a very big stack, as the 
//saved data is all over the memory and incremented with just a bit with each addeded element;
//but the disadvantage is the speed( compared with arrays) and also the fact you have to save
//a value of the pointer itself;

//Queues: already mentioned not to build it with arrays because of the shifting of indexes when you  
//need to remove an elem , so you would use LL;