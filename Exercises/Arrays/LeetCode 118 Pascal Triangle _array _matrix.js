// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

//----------------------------------------------

// Formula for the value C of "k"-th element from row "n"
// - numbering of rows "n" starts from 0
// - numbering of elements "k" in a row starts from 0
// C(n,k) = n! / (k! * (n-k)!)

const factorial = function (x) {
  //returns the factorial of x

  if (x === 0) return 1;

  let fact = 1;
  for (let i = 1; i <= x; i++) {
    fact = fact * i;
  }
  return fact;
};

const generate = function (numRows) {
  let answer = [[1]]; //in case numRows is 1, then answer will be returned at the end;

  if (numRows > 1) {
    for (let n = 1; n < numRows; n++) {
      //We create one row at a time in var "row" and push it in "answer";
      //With k we count how many elems are being added to current row;
      //Now, the formula works programatically well for the elems of each row except 1st and last;
      //But 1st and last are always "1"s; so you can add them at the beginning and end of each row;

      //[1,5,10,10,5,1] -> for values 5 and 10 you can use the formula, but not for "1"s
      let row = [1];
      let k = 1; //as we already added 1st elem of the row, k will start from next position until
      //the penultimate
      while (k < n) {
        row.push(factorial(n) / (factorial(k) * factorial(n - k)));
        k++;
      }
      row.push(1); //now you finished a row, next loop row will initialize again with a "1"

      answer.push(row);
    }
  }

  return answer;
};

// -------------------------------------------------------------
//Another way to create this would be to create the triangle by creating each row as the definition says
//But above Leetcode says its faster;

/*
  //1st and last elem will be a 1;
  // Row ID
  //  0 : [1]
  //  1 : [1, 1]
  //  2 : [1, 2, 1]
  //  3 : [1, 3, 3, 1]
  //  4 : [1, 4, 6, 4, 1]
  //  5 : [1, 5,10,10, 5, 1]
  
  //If you are on 5th row ( numRows=6), to calc "3"rd elem :
  //  5[2]= 4[1] + 4[2] ( 10 = 4+6)
  
  const generate = function (numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    let answer = [[1], [1, 1]]; //in case numRows is 1, then answer will be returned at the end;
  
    //For all the other cases, where numRows is 3 or higher, we're creating each row;
    for (let n = 2; n < numRows; n++) {
      let row = [1];
      let k = 1; //the "k"th element we calculate, we start with 1 and not with 0(as we already added 1st elem as a "1");
      while (k < n) {
        row.push(answer[n - 1][k - 1] + answer[n - 1][k]);
        k++;
      }
      row.push(1);
      answer.push(row);
    }
    return answer;
  };
  */

console.log(generate(3));
