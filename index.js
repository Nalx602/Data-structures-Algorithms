// 74. Search a 2D Matrix

// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
// This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10**4 <= matrix[i][j], target <= 10**4
//------------------------------------------------------------------

//Instead of doing a linear search ( going through each elem till the last one and decide if found), you
//need to do a binary search ( divide & conquer) algorithm;

//You can traverse the matrix and create a binary search tree; or you can traverse the matrix and create
//an array from it;

//But I can make a fct to have each spot in the matrix correspound to a position

//    m=  0  1  2   3  4  5   6  7  8
//  n=
//       /-------+---------+---------
//  0    /0  1  2 | 3  4  5 | 6  7  8
//  1    /10 11 12|13 14 15 |16 17 18
//  2    /20  ...  etc
//       /-------+-
//  3    /3  3  3 |
//  4
//  5
//
//  6
//  7
//  8

const searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  //you need to think of the matrix as being an array without actually transforming it into one;
  //the index of the array would be:
  let posStart = 0;
  let posEnd = m * n - 1;

  //You need to find the middle of this array;
  let middle = Math.floor((posEnd + posStart) / 2); // needs to be integer, hence Math.floor()

  //The el at position i in the array (0 <= i <= m*n-1) would correspond to the below el of the matrix
  //                matrix [Math.floor( i/m )] [ i%m ]
  //if you think about it, it's how many full rows can fit in value i would be the row and the remainder
  //of it would be the col.

  while (posEnd - posStart > 1) {
    //compare the el at middle with your target
    if (matrix[Math.floor(middle / m)][middle % m] === target) {
      return true;
    } else if (matrix[Math.floor(middle / m)][middle % m] < target) {
      posStart = middle;
      middle = Math.floor((posEnd + posStart) / 2);
    } else {
      posEnd = middle;
      middle = Math.floor((posEnd + posStart) / 2);
    }
  }

  if (target === matrix[Math.floor(posStart / m)][posStart % m]) return true;
  if (target === matrix[Math.floor(posEnd / m)][posEnd % m]) return true;

  return false;
};

const myMatrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const myTarget = 60;

console.log(searchMatrix(myMatrix, myTarget));
