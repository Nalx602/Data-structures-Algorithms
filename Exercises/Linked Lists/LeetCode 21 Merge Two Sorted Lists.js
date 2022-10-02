// 21. Merge Two Sorted Lists
// Easy

// You are given the heads of two sorted linked lists "list1" and "list2".
// Merge the two lists in a one sorted list. The list should be made by
// splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both "list1" and "list2" are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//-----------------------------------------------------------------------

//You traverse with 2 pointers each list and compare, at each stage, the node values;
//As you go along, you interchange the relation between the nodes;

//you want to check if you will insert testNode between currNode and currNode.next;
//you do that if currNode.val <=testNode.val <= currNode.val;
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

const createLL = function (arr) {
  if (arr.length === 0) return null;

  let head = new Node(arr[0]);
  let currNode = head;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]);
    currNode.next = newNode;
    currNode = currNode.next;
  }

  return head;
};

const insertNode = function (currNode, testNode) {
  //inserting testNode.val as interim node between currNode and currNode.next
  const temp = currNode.next;
  const insertNode = new Node(testNode.val);
  insertNode.next = temp;
  currNode.next = insertNode;
};

const mergeTwoLists = function (list1, list2) {
  let pos1 = null;
  let pos2 = null;
  let retL1 = null; //return L1 or L2, depends which one doesn't become null
  let retL2 = null;

  //In case the 2 LL are empty, return an empty list
  if (!list1 && !list2) return list1;

  //Else, in case that one of them is empty, return the other LL
  if (!list1) return list2;
  if (!list2) return list1;

  //Setting up the starting points for each list;At this stage you know none is empty;
  if (list1.val <= list2.val) {
    pos1 = list1;
    pos2 = list2;
    retL1 = true;
  } else {
    pos1 = list2;
    pos2 = list1;
    retL2 = true;
  }
  //At this stage, you know pos1 LL starts with a head smaller or equal to pos2;
  //We will always insert elems from pos2 into pos1 LL;

  while (pos1 && pos2) {
    // The idea is to take elems from pos2 and insert it in pos1

    //1st Case: pos1 <= pos2 <= pos1.next :
    //you put pos2 between pos1 and pos1.next; you put pos1 on the new added elem & move pos2 to next elem;
    //you keep on doing this until the condition breaks;Note:you must check before that pos1.next!=null

    while (
      pos1.next &&
      pos2.next &&
      pos1.val <= pos2.val &&
      pos2.val <= pos1.next.val
    ) {
      insertNode(pos1, pos2);
      pos1 = pos1.next;
      pos2 = pos2.next;
    }

    //2nd Case: pos1 <= pos1.next <= pos2 :
    //in this case, you will NOT insert pos2, you will move pos1 to next elem;
    //you keep on doing this until the condition breaks;Note:you must check before that pos1.next!=null

    while (pos1.next && pos1.val < pos2.val && pos1.next.val <= pos2.val) {
      pos1 = pos1.next;
    }

    //3rd Case: pos2 <= pos1 : you should not reach this case, because the pos1 LL starts with smaller
    //value; so you will add the el from pos2 after him and move the pos1 to it;
    //so it is normal for this to be smaller than the next el from pos2 LL

    //When reaching the end of the LLs...
    if (pos2.next === null) {
      //if you are at the last el that needs adding from pos2 LL, you will need to add it and break;
      if (pos1.val <= pos2.val) {
        insertNode(pos1, pos2);
      }
      break;
    }
    if (pos1.next === null && pos2 !== null) {
      //in case the pos1 is on the last el and there is nothing else left, you must check if
      //pos2 still has elems remaining which you need to add at the end of pos1 LL and get
      //out of the loop;
      pos1.next = pos2;
      break;
    }
  }
  if (retL1) return list1;
  if (retL2) return list2;
};

const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];

const list1 = createLL(arr1);
const list2 = createLL(arr2);

console.log(mergeTwoLists(list1, list2));
