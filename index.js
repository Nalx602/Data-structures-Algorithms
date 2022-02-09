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

class LinkedList {
  constructor(value){
    this.head= {
      //this will be the first node of the linked list, when
      //we instantiate it, so the pointer will be null
      value:value,
      next:null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(valueAppend){
    //we will have to create a new node first
    const newNode = {
      value:valueAppend,
      next:null
    }

    //Now we have to change the tail;
    //1st you change the pointer of the current tail to 
    this.tail.next = newNode;
    this.tail = newNode;

    //And increase the length with 1
    this.length++;

  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
//myLinkedList.append(16);
console.log(myLinkedList);