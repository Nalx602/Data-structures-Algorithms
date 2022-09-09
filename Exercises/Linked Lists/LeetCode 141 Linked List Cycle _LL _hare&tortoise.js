// 141. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached
// again by continuously following the next pointer. Internally, pos is used to denote the
// index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

//  3 -->-- 2 -->-- 0 --> -4 ---
//          ↑                   ↓
//          --------<-------<----

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Constraints:
// The number of the nodes in the list is in the range [0, 10**4].
// -10**5 <= Node.val <= 10**5
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

//----------------------------------------------------------------

//Okay, the thing with the input, Leetcode will take an array and pos as test case
//but behind the scenes will make a linked list which will be inserted in your fct.

//So treat "head" as being a linked list.

/**
 * How a node is defined
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
//---------------------------------------------------------------------

//One method would be to use a hashMap, store each node in it; if tail.next === null
//then the LL has no loops, otherwise the hashMap will already have an entry while
//you hit the loop; this will use a lot of extra memory space;

//----------------------------------------------------------------
//Another better way would be to use the hare-tortoise algorithm; imagine the hare & tortoise
//are pointers running along the LL, starting from the head ;if the LL would be a cycle, the
//hare ( which is faster) would do a cycle and meet the tortoise again; So, besides the starting
//point, if the hare & tortoise land on another node -> LL has cycles; if hare reaches
//a node tail.next === null -> LL has no cycles ( linear); you can think of this as 2 pointer
//solution, a fast & a slow pointer

const hasCycle = function (head) {
  let hare = head;
  let tortoise = head;

  //the hare will jump 2 nodes while the tortoise only 1 node

  while (hare && hare.next) {
    //the condition here is so that the faster pointer
    //does not hit the end ( it can land on the tail itself or it can land on
    //the tail.next, hence "hare && hare.next")
    hare = hare.next.next;
    tortoise = tortoise.next;
    if (hare === tortoise) return true;
  }

  return false;
};
