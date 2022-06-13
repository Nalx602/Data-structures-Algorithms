// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  //Test that n is a number & that n >=0 tbd

  //We can use arrays
  let arr = [0,1];// in case n is 0 or 1, arr[n] will return 0 or 1
  for ( let i=2; i<n+1; i++){
    arr.push(arr[i-1] + arr[i-2]);//otherwise add extra elem to the array with push
  }
  return arr[n];

  //Time complexity O(n)
}


function fibonacciRecursive(n) {
  //Always think in the Base scenario vs Recursive scenario
  
  //Base scenario
  if(n === 0) return 0;
  if(n === 1) return 1;

  //Recursive scenario
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);

  //What is the time complexity?
  //look at this bit of code "return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);"
  //each call of the function will need to recalculate the fibonacci again 2 times;
  //so for an increase of n with 1, you have to calculate 2 x fibRec, and each one of them
  //needs to calc 2 x fibRec and so on..... -> 2 x 2 x ... -> O(2^n) 
  //This is exponential time complexity ...very bad!!
}

console.log(fibonacciIterative(21));
console.log(fibonacciRecursive(21));