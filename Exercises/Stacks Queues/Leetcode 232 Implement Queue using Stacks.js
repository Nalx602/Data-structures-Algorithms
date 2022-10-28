// 232. Implement Queue using Stacks

// Implement a first in first out (FIFO) queue using only two stacks.
// The implemented queue should support all the functions of a normal queue:
// push, peek, pop, and empty.

// Implement the MyQueue class:
//    - void push(int x) Pushes element x to the back of the queue.
//    - int pop() Removes the element from the front of the queue and returns it.
//    - int peek() Returns the element at the front of the queue.
//    - boolean empty() Returns true if the queue is empty, false otherwise.

// Notes:
// You must use only standard operations of a stack, which means only push
// to top, peek/pop from top, size, and is empty operations are valid. Depending
// on your language, the stack may not be supported natively. You may simulate a
// stack using a list or deque (double-ended queue) as long as you use only a
// stack's standard operations.

// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]

// Output
// [null, null, null, 1, 1, false]

// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

// Constraints:

// 1 <= x <= 9
// At most 100 calls will be made to push, pop, peek, and empty.
// All the calls to pop and peek are valid.

// Follow-up: Can you implement the queue such that each operation is
// amortized O(1) time complexity? In other words, performing n operations will take
// overall O(n) time even if one of those operations may take longer.

//-------------------------------------------

//creating a Stack ( first in, last out)..making it with arrays

class Stack {
  constructor() {
    this.size = 0;
    this.myStack = [];
  }

  push(val) {
    this.size++;
    this.myStack.push(val);
    return this.myStack[this.size - 1];
  }

  pop() {
    this.size--;
    return this.myStack.pop();
  }

  peek() {
    return this.myStack[this.size - 1];
  }

  isEmpty() {
    if (this.size === 0) return true;
    else return false;
  }
}

class MyQueue {
  constructor() {
    this.size = 0;
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  push(val) {
    this.stack1.push(val);
    this.size++;
  }

  #putS1inS2(s1, s2) {
    const lengthS1 = s1.size;
    for (let i = 0; i < lengthS1; i++) {
      //don't use s1.size in the "for" loop as it keeps changing with each pop()
      const x = s1.pop();
      s2.push(x);
    }
  }

  pop() {
    if (this.stack1.size === 0 && this.stack2.size === 0) return null; //empty stack, no more elems in it

    if (this.stack2.size === 0) {
      //2nd stack is empty but 1st stack has elems in it, transfer the elems then pop the last elem
      this.#putS1inS2(this.stack1, this.stack2);
    }

    //Otherwise, when s1 empty/s2 with elems || s1 and s2 has elems in it
    this.size--;
    return this.stack2.pop();
  }

  empty() {
    if (this.stack1.size === 0 && this.stack2.size === 0) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if (this.stack1.size === 0 && this.stack2.size === 0) return null;

    if (this.stack2.size === 0) {
      //2nd stack is empty but 1st stack has elems in it, transfer the elems then pop the last elem
      this.#putS1inS2(this.stack1, this.stack2);
    }

    return this.stack2.myStack[this.stack2.size - 1];
  }
}

const newQueue = new MyQueue();

console.log("---------------------------------\n");

newQueue.push(1);
console.log(newQueue);
console.log("---------------------------------\n");
newQueue.push(2);
console.log(newQueue);
console.log("---------------------------------\n");
newQueue.push(3);
console.log(newQueue);
console.log("---------------------------------\n");
newQueue.push(4);
console.log(newQueue);

console.log("---------------------------------\n");
console.log(newQueue.pop());
console.log(newQueue);

console.log("---------------------------------\n");
newQueue.push(5);
console.log(newQueue);

console.log("---------------------------------\n");
console.log(newQueue.pop());
console.log(newQueue);
console.log("---------------------------------\n");
console.log(newQueue.pop());
console.log(newQueue);

console.log("---------------------------------\n");
console.log(newQueue.pop());
console.log(newQueue);

console.log("---------------------------------\n");
console.log(newQueue.pop());
console.log(newQueue);
