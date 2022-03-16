// let's say we want to create the linked list 
// containing 10-->5-->16
// let myLinkedList = {
//   head:{//the head node will have a value+pointer
//     value:10,
//     next:{//now this needs to be a pointer, so in JS
//           //you just indicate another object
//       value:5,
//       next:{//this will also need point to next node
//         value:16,
//         next:null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      //this will be the first node of the linked list, when
      //we instantiate it, so the pointer will be null
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // //we will have to create a new node first
    // const newNode = {
    //   value: value,
    //   next: null
    // }
    // //or create it from the Node class
    const newNode = new Node(value);

    //Now we have to change the tail;
    //1st you change the pointer of the current tail to 
    this.tail.next = newNode;
    this.tail = newNode;//here you break the referencing of the tail, to reference
    //the newNode instead of the head;

    //And increase the length with 1
    this.length++;

    this.printList();
  }

  prepend(value) {
    //method to add a node at the beginning of the LL;
    //the head will need to be updated;

    // const newNode = {
    //   value: value,
    //   next: null
    // }
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this.printList();
  }

  printList() {
    //print our LL to show as if it would be an array
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    //insert a node at "index" location with payload "value"

    //First check if the index is a valid number
    if (isNaN(index) || index < 0) return 'Invalid index position';

    //If the index is higher than the length of the LL, automatically add it at the end
    if (index >= this.length) return (this.append(value));

    //In case the index is 0, it's just an prepend actually
    if (index === 0) return (this.prepend(value))

    //Other cases...

    const newNode = new Node(value);
    let currentNode = this.head;
    let previousNode = {};

    //first you need to reach the index position;
    for (let i = 1; i <= index; i++) {//you start i from 1, as currentNode was already the head
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    //After the "for" loop, the "currentNode" will be the node which will be replaced and
    //push to the right by the "newNode";

    //1. newNode point towards the currentNode
    newNode.next = currentNode;

    //2. previousNode point towards the currentNode
    previousNode.next = newNode;

    //3. increase the length with 1
    this.length++;

    return this.printList();

  }

  remove(index) {
    //Remove a Node from position 'index'

    //First check if the index is a valid number
    if (isNaN(index) || index < 0 || index >= this.length) {
      console.log('Invalid index position');
      return;
    };

    //Treat the cases for head 
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return this.printList();
    }

    let currentNode = this.head;
    let previousNode = {};
    let tempNode = {}

    //first you need to reach the index position;
    for (let i = 1; i <= index; i++) {//you start i from 1, as currentNode was already the head
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    //Deleting an object is done indirectly via breaking reference to it


    //1. currentNode will be the Node we want to delete, so previousNode.next will need
    //to reference currentNode.next
    previousNode.next = currentNode.next;
    delete currentNode.next;
    delete currentNode.value;

    //2. Decrease the length with 1
    this.length--;

    return this.printList();
  }

  reverse(){
    if(!this.head.next) {
      //in case the LL is only made of a single item, just return it back
      return this.head;
    }
    
    // check this visualisation "https://media.geeksforgeeks.org/wp-content/cdn-uploads/RGIF2.gif"
    this.tail = this.head; //as the LL will be reversed;
    let currNode = this.head;
    let nextNode = null;
    let prevNode = null;

    //This is the iterative way:
    //You will use 3 nodes, a previousNode, a currentNode and a nextNode;
    //You will traverse the LL and make sure you don't lose the relation between a node with its predecesor 
    //or his successor; initially you will set the currNode = our head & the nextNode and prevNode = null;

    //nextNode will be currNode.next; as you do that, you can unlink the current node from his successor and revert
    //his direction (now...for the first elem of the LL, you will need to point towards NULL, that is why we 
    //initially set the prevNode=null);
    //then you move forward prevNode & currNode;
    //We chose to take as a sign that the LL has finished once the currNode = null;
    //Once that has happened, then prevNode will be the head, so we have to set it up as such;
    
    while(currNode!== null){
      nextNode=currNode.next;
      currNode.next = prevNode;//in first iteration, in fact poining the first elem to null
      prevNode=currNode;//bringing it forward one step
      currNode=nextNode;//bringing it forward one step
    }
    this.head = prevNode;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(3, 99);
myLinkedList.insert(8, 11);
myLinkedList.remove(3);
myLinkedList.reverse();
console.log(myLinkedList.length);