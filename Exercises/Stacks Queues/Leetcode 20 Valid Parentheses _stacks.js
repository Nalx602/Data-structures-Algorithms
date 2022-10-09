// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1.Open brackets must be closed by the same type of brackets.
// 2.Open brackets must be closed in the correct order.
// 3.Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 10**4
// s consists of parentheses only '()[]{}'

//--------------------------------

//   (   [  { () }  ]    { }  )
// P = parenthesis ; Ps = parentheses
//If you go from left->right, when you reach a closing P, the one just before it must be an
//opening P of the same type.
//If that is met, then you must remove the closing and opening Ps pair.
//If that is not met, eg (  { ) }  , then the strint is not valid.
//You can make a stack ( an array) with each individual el being a P which is added by
//traversing the string s. When a P is added, you must check :
// - if it is an opening P, you add it to the stack;
// - if it is a closing P, you check last P of the stack
//      - if same type, you remove the last opening P from stack and move to next el from s
//      - if not same, return false

const charSet = new Set(["(", ")", "{", "}", "[", "]"]);
const charSet1 = new Set(["(", ")"]);
const charSet2 = new Set(["{", "}"]);
const charSet3 = new Set(["[", "]"]);
const charSetOpen = new Set(["(", "{", "["]);
const charSetClosed = new Set([")", "}", "]"]);

const isParenthesis = function (val) {
  //returns true only if the character is part of the given parentheses set
  if (!charSet.has(val)) return false;
  return true; //otherwise return false;
};

const isSameType = function (a, b) {
  //Checking if they are the given parentheses set
  if (charSet1.has(a) && charSet1.has(b)) return true;
  if (charSet2.has(a) && charSet2.has(b)) return true;
  if (charSet3.has(a) && charSet3.has(b)) return true;
  return false;
};

const isValid = function (s) {
  const strLen = s.length;
  let myStack = [];

  //If 1st char of the string is a closed P, not valid; otherwise add it to the stack;
  if (charSetClosed.has(s[0])) return false;
  else myStack.push(s[0]);

  for (let i = 1; i < strLen; i++) {
    let currChar = s[i];

    if (!isParenthesis(currChar)) return false; //if char not a P -> not valid;

    //when a char is a open P, add it to the stack; this stack should have only open P;
    if (charSetOpen.has(currChar)) {
      myStack.push(currChar);
    }

    //when a char is a closed P, compare it with the last elem of the stack; they
    //have to match, otherwise not valid; if they match, remove the latest opened
    //P from stack; at the end, if all good, this stack should be empty;
    if (charSetClosed.has(currChar)) {
      if (isSameType(myStack[myStack.length - 1], currChar)) {
        myStack.pop();
      } else return false;
    }
  }

  if (myStack.length === 0) return true;
  else return false;
};

const myString = "(]";

console.log(isValid(myString));
