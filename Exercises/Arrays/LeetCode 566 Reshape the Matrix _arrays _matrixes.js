// LeetCode566. Reshape the Matrix

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Example 2:
// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

// Constraints:
// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// -1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300

// --------------------------------------------

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
  let number = [];
  const m = mat.length;
  const n = mat[0].length;

  // the new matrix must fit the initial one as to the number of elems
  if (m * n !== r * c) {
    return mat; //you exit fct if it's not possible
  }

  for (let i = 0; i < r; i++) {
    number[i] = new Array(c);
  }

  //Now you can create a single continuous array from mat and pop each elem
  //from it to create the new matrix:

  //let serialMat = [];

  //   for (let i = 0; i < m; i++) {
  //     for (let j = 0; j < n; j++) {
  //       serialMat.push(mat[i][j]);
  //     }
  //   }

  //   for (let i = r - 1; i >= 0; i--) {
  //     for (let j = c - 1; j >= 0; j--) {
  //       number[i][j] = serialMat.pop();
  //     }
  //   }

  //But a little bit better from memory perspective, you can create 2 indexes
  // idRow and idCol, you leave idRow to 0 until idCol increments and reaches
  //the value c, then idCol goes back to 0 and idRow increments;

  let idRow = 0;
  let idCol = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      number[idRow][idCol] = mat[i][j];
      idCol++;
      if (idCol >= c) {
        idCol = 0;
        idRow++;
      }
    }
  }

  //return serialMat;
  return number;
};

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

console.log(matrixReshape(mat, 2, 6));
