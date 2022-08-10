//   >>>>>>>>   DYNAMIC PROGRAMMING   <<<<<<<<

//It is an optimisation tehnique using something called caching. It solves problems by
//breaking it down in a collection of sub-problems, then solving and storing the solution
//for each sub-problem and using it next time in case that sub-problem appears again.

// 1. Caching

//It is a way of storing values so that you can use them later on; it helps speeding
//our program

// 2. Memoization

// Memoization is a type of caching which involves storing the return value of
//a function based on the input parameters of the function;

function addTo80(n) {
  console.log("This fct takes a long time");
  return n + 80;
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

//Imagine function addTo80 is, in fact, a very time & resource consuming function and we
//need to calculate it 3 times for the input value of "5"; it would be better, when
//we calculated the answer for input value "5" once, to store the answer for it and quickly
//have it at hand for future times;

//For that we can use an object in which we create properties with the name as being the
//input value of our expensive function "n" & these properties will be = with the output
//of the function addTo80;

// let cache = {};
// function memoizedAddTo80(n) {
//   if (n in cache) {
//     // this checks if "n" is a property of object "cache",
//     // same as " if (cache.n) "
//     console.log("Value found in cache, quick answer");
//     return cache[n];
//   } else {
//     cache[n] = n + 80;
//     console.log("Not in cache, calculating takes long time");
//     return cache[n];
//   }
// }

// console.log(memoizedAddTo80(5));
// console.log(memoizedAddTo80(5));
// console.log(memoizedAddTo80(5));

//So memoization is remembering a solution to a problem, so you don't have to calculate
//it again in the future;

//Now, it is not a good practice to have the "cache" variable in a global scope;
//To have it stored inside a function in a way that we can both locally store the "cache"
//and also do memoization, we can use JS closures;
//Closures are a way of accessing the variables from the same scope where the function
//was created ( or something like that ... better to check Jonas video #137 from JS course)

function memoizedAddTo80() {
  let cache = {};

  return function (n) {
    if (n in cache) {
      // this checks if "n" is a property of object "cache",
      // same as " if (cache.n) "
      console.log("Value found in cache, quick answer");
      return cache[n];
    } else {
      cache[n] = n + 80;
      console.log("Not in cache, calculating takes long time");
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();
//So "memoized" is a var which is, in fact, a function; "cache" will be
//accessible all the time to "memoized", so "memoized" can put make use
//of it while object "cache" is not in global scope;

console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));

// Questions to ask in order to see if a problem can be solved with Dynamic Programming

//1. Can be divided into subproblems?
//2. Does it have a recursive solution?
//3. Are there repetitive subproblems?
//4. Can you make use of memoization of the subproblems?
