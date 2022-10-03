// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

//----------------------------------------------------------------------------------------------

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLL = function (arr) {
  let head = {};
  if (arr.length === 0) return head; // in case we have an empty LL, we return the empty list

  head = new Node(arr[0]);
  if (arr.length === 1) return head; //if LL is one node, return it;

  let currNode = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]);
    currNode.next = newNode;
    currNode = currNode.next;
  }

  return head;
};
const reverseList = function (head) {
  //1st Case, the LL is empty
  if (!head.val) return head;

  //2nd case, the LL has one node
  if (head.next === null) return head;

  //3rd case, the LL has 2 nodes
  if (head.next.next === null) {
    const newTail = head.val;
    const newHead = head.next.val;
    const revHead = new Node(newHead);
    revHead.next = new Node(newTail);
    return revHead;
  }

  //From the moment you have 3 nodes or more, you will use prevNode, currNode and nextNode to keep
  //the relation between your predecesor and successor; currNode will start from the head and we will
  //reverse the order so that you have prevNode(null) <- currNode <-nextNode;
  let prevNode = null;
  let nextNode = null;
  let currNode = head;
  while (currNode !== null) {
    //we will stay in this loop until the currNode reaches the null of the initial tail;
    //at that stage, prevNode will be the start of the LL, so we will return it;
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};

const myArr = [1, 2, 3];
const myHead = createLL(myArr);
console.log(myHead);
const myRevLL = reverseList(myHead);
console.log(myRevLL);
