// 36. Valid Sudoku

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// -Each row must contain the digits 1-9 without repetition.
// -Each column must contain the digits 1-9 without repetition.
// -Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1: Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2: Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

// ----------------------------------------------------------

//You can traverse the matrix with i and j;
//You have to make some kind of rule based on i and j how to make the keys of your hash so
//that you can extract info from it easy; you get to a number, it must create an entry

// on 1st line there is a "3" - it can create entries:
// - "r13"; if another 3 appears on row 1, it will not let me add it
// - "c23"; same, if 3 appears on column 2, it will not let me add it
// - "b13"; if 3 appears in box 1, same;

//We can create 9 boxes, numbered from 0 to 8 ( top-left to right-bottom)
// box = iMath.floor(i / 3) * 3 + Math.floor(j / 3)
// to see box numbering:
// 0  0  0 | 1  1  1 | 2  2  2
// 0  0  0 | 1  1  1 | 2  2  2
// 0  0  0 | 1  1  1 | 2  2  2
// --------+---------+---------
// 3  3  3 | 4  4  4 | 5  5  5
// 3  3  3 | 4  4  4 | 5  5  5
// 3  3  3 | 4  4  4 | 5  5  5
// --------+----------+--------
// 6  6  6 | 7  7  7 | 8  8  8
// 6  6  6 | 7  7  7 | 8  8  8
// 6  6  6 | 7  7  7 | 8  8  8

const calcBox = function (i, j) {
  return Math.floor(i / 3) * 3 + Math.floor(j / 3);
};

const isValidSudoku = function (board) {
  //You can return false if a condition is not met;
  //If all passes ok, let it automatically return true;
  let map = {};

  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (board[i][j] !== ".") {
        //if it already exists in a row or column or box, exit with false
        if (
          map["r" + i + board[i][j]] ||
          map["c" + j + board[i][j]] ||
          map["b" + calcBox(i, j) + board[i][j]]
        ) {
          return false;
        }

        //otherwise add it to the map
        map["r" + i + board[i][j]] = board[i][j];
        map["c" + j + board[i][j]] = board[i][j];
        map["b" + calcBox(i, j) + board[i][j]] = board[i][j];
      }
    }
  }

  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
