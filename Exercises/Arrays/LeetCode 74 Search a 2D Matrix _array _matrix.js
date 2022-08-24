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

//Another way would be to think of the matrix as being an array without actually transforming it into one;
//This is faster as you doing binary search;

const mid = function (start, finish) {
  // needs to be integer, hence Math.floor()
  return Math.floor((start + finish) / 2);
};

const elemMatrix = function (pos, matrix) {
  return matrix[Math.floor(pos / matrix[0].length)][pos % matrix[0].length];
};

const searchMatrix = function (matrix, target) {
  let m = matrix.length; // lenght of colon
  let n = matrix[0].length; //this would be the length of a row

  //the index of the array would be:
  let posStart = 0;
  let posEnd = m * n - 1;

  //The el at position i in the array (0 <= i <= m*n-1) would correspond to the below el of the matrix
  //      matrix [Math.floor( i/ length row )] [ i % length row ]
  //if you think about it, it's how many full rows can fit in value i would be the row and the remainder
  //of it would be the col.

  while (posEnd != posStart) {
    //in the fictional array, you will have:  [posStart .... middle ......posEnd ];
    //if the target>middle, then you can move posStart at middle; in fact, you can move
    //it one step further than middle, as you are sure target!=middle;
    //In case you end up in a scenario in which posStart and posEnd are positions next to
    //each other and the target is one of them:
    //-if target>posStart, then target=posEnd ( you continue with posEnd as being your result)
    //-if target!>posStart, then target=posStart and the middle will become the target in next
    //iteration which will pass that to posEnd...again it's good.

    let middle = mid(posStart, posEnd);

    if (elemMatrix(middle, matrix) < target) {
      posStart = middle + 1;
    } else {
      posEnd = middle;
    }
  }

  return matrix[Math.floor(posEnd / n)][posEnd % n] === target;
};

const myMatrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const myTarget = 60;

//console.log(elemMatrix(4, myMatrix));

console.log(searchMatrix(myMatrix, myTarget));
