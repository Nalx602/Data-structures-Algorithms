// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// 5! = 5 * 4 * 3 * 2 * 1 

function findFactorialRecursive(number) {
  //Remember, the function needs to call itself;
  //Identify the base case and the recursive case;
  //
  // 5! = 5 * 4!

  //Base scenario is findFactorialRecursive(1)
  //Also include the case of 0!=1
  if( number === 1 || number === 0) return 1;
  
  //The recursive scenario
  number--;
  return (number+1) * findFactorialRecursive(number);;

  //This will be O(n)
}

function findFactorialIterative(number) {
  let answer = 1;
  for(let i=1; i<=number; i++){
    answer = answer * i;    
  }
  return answer;

  //This will be O(n)
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));

