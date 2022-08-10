//Fibonacci sequence using memoization

//Fibonacii = next number is found by adding up the two numbers before it

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 etc

let calculationRec = 0;
function fibRec(n) {
  calculationRec++;

  if (n < 2) return n; // accounting for the first 2 cases (n is 0 or 1)

  return fibRec(n - 1) + fibRec(n - 2);
}

console.log("Recursive answer:", fibRec(30), "Calculations: ", calculationRec);
// fib(7) = 13 and the number of calculations will be 41
// fib(30) = 832040 and the number of calculations will be 2692537 ( over 2 million calc !!!)
//That is because we are doing a lot of the same calculations. Which ones?
//Well, in case of fib(7), we will need to do fib(6) and fib(5), which in turn needs fib(5)
//and fib(4) ...and so on.. we keep on doing these calculations recursively;

//So it looks we will need to use memoization

//Implementing Dynamic Programming for Fibonacci

let calculationDP = 0;
function fibMemoization() {
  let cache = {};

  return function fib(n) {
    if (n in cache) return cache[n];
    else {
      calculationDP++;
      if (n < 2) return n;
      else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fibDP = fibMemoization();
console.log("DP answer: ", fibDP(30), "Calculations:", calculationDP);

//So you can see, for fibDP(30), we make only 32 calculation !!!
//Of course, the disadvantage is you use more memory with "cache";

// Time complexity :
//Recursive way - O(2^n)
//DP way - O(n)

// Space complexity :
//Recursive way - O(1)
//DP way - O(n)
