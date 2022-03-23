// Using LL to create a Queues;
//It will be simillar with Stacks but now you must be carefull that Queues are FIFO;
//In the case of Queues, you will add a new elem at one end of the LL and remove an
//elem from the other end of the LL; so, we can choose:
//new elem will be added to the tail of the LL;
//removing elem will be from the head of the LL;
// You have to create the 4 methods, peek(), enqueue(), dequeue() and isEmpty()


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  isEmpty() {
    //Checking if the Queue is empty
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if (this.isEmpty()) {
      console.log('The Queue has no elements!')
    } else {
      console.log(`The first element of the queue is `, this.first.value);
    }
  }

  //Adding an elem into the Queue
  enqueue(value) {
    const elem = new Node(value);

    //1st case, checking if the Queue is empty
    if (this.length === 0) {
      this.first = elem;
      this.last = elem;
      this.length += 1;
    } else {
      //2nd case when the Queue has at least one elem;
      //adding elem to the tail of the LL;
      this.last.next = elem;
      this.last = elem;
      this.length += 1;
    }
    console.log(`Element ${this.last.value} has been added to queue!`);
  }

  //Removing an elem from the Queue
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is already empty, please add elements before dequeuing !");
    } else if (this.length === 1) {
      //in case the Queue has a single elem, you must make it back to empty;
      console.log(`Element ${this.first.value} has been removed from the stack!`);
      this.first = null;
      this.last = null;
      this.length = 0;
    } else {
      // In case there's 2 or more elem, just need to remove the head of the LL
      console.log(`Element ${this.first.value} has been removed from the stack!`);
      this.first = this.first.next;
      this.length -= 1;
    }
  }
}

const myQueue = new Queue();

myQueue.peek();
myQueue.enqueue('hello');
myQueue.enqueue('there');
myQueue.peek();
myQueue.dequeue();
myQueue.peek();

myQueue.dequeue();

myQueue.dequeue();

//     x -> y -> z -> null
//                w  

