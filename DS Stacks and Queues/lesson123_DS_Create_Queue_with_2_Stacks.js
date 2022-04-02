// Create a queue using 2 stacks
//We will create the stacks using arrays

class Stack  {
  constructor (){
    this.arr= [];
  }

  peek() {
    return this.arr[this.arr.length-1];
  }

  pop(){
    if(this.isEmpty()) return null;
    else return this.arr.pop();;
  }

  push(elem){
    this.arr.push(elem);
    return this.arr[this.arr.length-1];
  }

  isEmpty(){
    if (this.arr.length === 0) return true;
    else return false;
  }
}

const s1 = new Stack();
const s2 = new Stack();

//Creating a queue using the 2 stacks;
//Initially both stacks are empty

//1st method: 
//    enque : new el are added to s1 & you keep on adding them;
//    deque : you will have to deque the el at the bottom of s1 stack, so you pop all the el from s1
//and gradually push them into s2; at the end, the oldest el will be on top of s2; then you pop this el
//as deque return; then you do the reverse operation and return all the el from s2 back to s1;
//    Time complexity : enque is O(1) but deque is O(n) as you have move s1 to s2 and then back so s1;

//2nd method:
//    enque : new el are being added to s1; 
//    deque : once a deque is needed, all the s1 el are popped and pushed into s2; the bottom el will
//be on top of s2 now, ready for pop as a deque return ( up to this point, same like method #1);
//but now, you leave the el as they are in s2 (you can continue to deque from here as they are properly 
//arranged); you continue to enque el by adding them on s1; when s2 is empty, then you can pop and push all
//its el again into s2; So deque from s2 until empty, then refill it with items from s1;

//Implementing 2nd method:

class Queue {
  constructor(){
    this.s1 = s1;
    this.s2 = s2;
  }

  isEmpty(){
    //If s1 and s2 are empty-> empty Queue
    if(this.s1.length===0 && this.s2.length===0) return true;
    else return false;
  }

  enque(elem){
    //always adding to s1
    return this.s1.push(elem);
  }

  deque(){
    //
    if(this.isEmpty()) return null;//in case both s1&s2 are empty

    if(this.s2.arr.length===0){
      //when s2 empty, put the el from s1 into s2
      while(this.s1.arr.length!=0){
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();//in case s2 is not empty
  }

  print(){
    console.log(`S1 = ${this.s1.arr}\tS2 = ${this.s2.arr}`)
  }
}

const myQueue = new Queue();

myQueue.print();
console.log('\nEnqueded ',myQueue.enque(2))
myQueue.print();
console.log('\nEnqueded ',myQueue.enque(4))
myQueue.print();
console.log('\nEnqueded ',myQueue.enque(7))
myQueue.print();
console.log('\nDequed',myQueue.deque())
myQueue.print();
console.log('\nEnqueded ',myQueue.enque('a'))
myQueue.print();
console.log('\nEnqueded ',myQueue.enque('b'))
myQueue.print();
console.log('\nDequed',myQueue.deque())
myQueue.print();
console.log('\nDequed',myQueue.deque())
myQueue.print();
console.log('\nDequed',myQueue.deque())
myQueue.print();
console.log('\nDequed',myQueue.deque())
myQueue.print();
console.log('\nDequed',myQueue.deque())
myQueue.print();