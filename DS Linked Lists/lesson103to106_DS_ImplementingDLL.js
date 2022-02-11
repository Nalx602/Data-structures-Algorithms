//Doubly linked list
//It is like single linked list but each node has an extra pointer showing to the prev elem
//It has the advantage that we can traverse the LL both ways

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev=newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log('yes')
      return this.append(value);
    }

    const newNode =new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev=leader;
    newNode.next = follower;
    follower.prev=newNode;
    this.length++;
    return this.printList();
  }
  
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    // Check Parameters      
    //Also to do: how to remove the head or the tail

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    const afterNode= unwantedNode.next;

    leader.next = unwantedNode.next;
    afterNode.prev = unwantedNode.prev;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(1, 99));

console.log(myLinkedList.remove(1));
console.log(myLinkedList.remove(1));

console.log(myLinkedList);
console.log(myLinkedList.printList());


// myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);