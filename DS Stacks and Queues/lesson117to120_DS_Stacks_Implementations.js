// Using LL to create a Stack;
// You have to create the 3 methods, peek(), push(), pop() and isEmpty()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  isEmpty() {
    //Checking if the Stack is empty
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  peek() {
    if (this.isEmpty) {
      console.log('The stack has no elements!')
    } else {
      console.log(`The top element of the stack is `, this.top.value);
    }
  }

  //Adding an elem into the stack
  push(value) {
    const elem = new Node(value);

    //1st case, checking if the Stack is empty, in which case top=bottom
    if (this.length === 0) {
      this.top = elem;
      this.bottom = elem;
      this.length += 1;
    } else {
      //2nd case when the Stack has at least one elem;
      //You would always play with the top, the top would be altered all the time;
      //To be efficient from the LL perspective, you will want to keep on changing the head
      //of the LL, so the head of the LL to be top of the Stack;
      //you don't want to iterate through the entire LL and have the tail equivalent of
      //the top of the stack, as this would make the operation as an O(n);
      elem.next = this.top;
      this.top = elem;
      this.length += 1;
    }
    console.log(`Element ${this.top.value} has been added to stack!`);
  }

  //Removing an elem from the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is already empty, please add elements before poping !");
    } else if (this.length === 1) {
      //in case the Stack has a single elem, you must make it back to empty;
      console.log(`Element ${this.top.value} has been removed from the stack!`);
      this.top = null;
      this.bottom = null;
      this.length = 0;
    } else {
      // In case there 2 or more elem, just need to remove the head of the LL
      console.log(`Element ${this.top.value} has been removed from the stack!`);
      this.top = this.top.next;
      this.length -= 1;
    }
  }
}

const myStack = new Stack();

myStack.push('hello');
myStack.push(5);
myStack.push(12);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();

// x -> x -> null
//


// Stacks implemented with arrays is very simple, you just use the
//pre-built in methods of Array

// class Stack {
//   constructor(){
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length-1];
//   }
//   push(value){
//     this.array.push(value);
//     return this;
//   }
//   pop(){
//     this.array.pop();
//     return this;
//   }
// }