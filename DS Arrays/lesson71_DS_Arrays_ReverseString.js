//Create a function that reverses a string

function reverse(str){
  //we should first check if the input value is string
  if(typeof str !== 'string') {
    return 'Invalid input';
  }


  // treat the string as an array;
  //take the last elem, pop it out and unshift it at begining of the same array..
  //but you will need to iterate once & unshift will iterate again -> so it will be O(n^2)
  
  //make a new array, what you pop from str you push on the new str
  strToArray= Array.from(str); //using Array.from(...) to create an array with the characters from the str

  let reversedStr = '';

  for ( let i=str.length-1 ; i>=0 ; i-- ) {
    reversedStr+=strToArray[i];
  }

  return reversedStr;
}

//Another way is to use built in methods like the .split(), .reverse() & .join()

const reverse2 = (str) =>{
  return str.split('').reverse().join('')
}


console.log(reverse2('Hi, my name is Alex'));
//console.log(reverse(null));

