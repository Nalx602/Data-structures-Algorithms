// 83. Remove Duplicates from Sorted List
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// Constraints:
// The number of nodes in the list is in the range [0, 300].
// -100 <= Node.val <= 100
// The list is guaranteed to be sorted in ascending order.

//-----------------------------------------------------------

//duplicates will be next to your node, so you have to check only next nodes

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

const deleteDuplicates = function (head) {
  //1st case, the list is empty
  if (!head) return head;

  //2nd case, the list has a single node
  if (head.next === null) return head;

  //3rd case, when the list has more than 1 node
  let currNode = head;
  let nextNode = currNode.next;

  //stay in below loop until currNode is on last node;
  while (currNode.next !== null) {
    //If nextNode = currNode:
    if (currNode.val === nextNode.val) {
      //... and there is a node after nextNode
      if (nextNode.next !== null) {
        currNode.next = nextNode.next; //skip nextNode;
      }

      //... or the next node is the last node
      if (nextNode.next === null) {
        currNode.next = null;
        break; //if you
      }
    } else {
      //If nextNode != currNode, move currNode one step;
      currNode = currNode.next;
    }

    //Moving nextNode; if there is a place to put nextNode, do it;
    //otherwise it means you reached end of LL so you can break;
    if (currNode.next) {
      nextNode = currNode.next;
    } else break;
  }

  return head;
};

const head = [1, 1, 2, 3, 3];
const myHeadLL = createLL(head);
console.log(myHeadLL);
console.log(deleteDuplicates(myHeadLL));
