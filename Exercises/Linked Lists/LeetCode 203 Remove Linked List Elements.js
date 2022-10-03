// 203. Remove Linked List Elements
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

// Constraints:
// The number of nodes in the list is in the range [0, 10**4].
// 1 <= Node.val <= 50
// 0 <= val <= 50

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLL = function (arr) {
  const head = new Node(arr[0]);
  let currPos = head;

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i]);
    currPos.next = newNode;
    currPos = currPos.next;
  }

  return head;
};

// const remNextEl = function (currPos) {
//   //removes currPos.next and connects currPos with currPos.next.next;
//   //also need to test currPos.next is not null, so not reached end of LL
//   if (currPos.next) currPos.next = currPos.next.next;
// };

const removeElements = function (head, val) {
  //1st check if the LL is not empty
  if (!head) return head;
  //You must traverse the LL and remove the elems.

  //2nd check if the head and the subsequent heads need to be replaced;
  while (head.val === val) {
    head = head.next;

    //Imagine having a LL [7,7,7,7] & val is 7; when you remove the last el, the
    //head will be an empty LL, so "head.val" will not exist, hence the test below;
    if (!head) return head;
  }
  //At this stage, you know the head is not equal to val; you set currPos to head
  //and we will check if the next item = val;
  // if yes : chain currPos with next.next
  // if no : currPos becomes next until it reaches null

  let currPos = head;

  while (currPos) {
    //1st check that currPos.next = null, meaning end of LL; if also the last
    //elem = val, delete it; if not, means you reached end of LL -> break and return head;
    if (currPos.next === null) {
      if (currPos.val === val) currPos = null;
      break;
    }

    if (currPos.next.val === val) currPos.next = currPos.next.next;
    else currPos = currPos.next;
  }

  return head;
};

const myArr = [7, 7, 7, 7];
const myHead = createLL(myArr);

console.log(removeElements(myHead, 7));
