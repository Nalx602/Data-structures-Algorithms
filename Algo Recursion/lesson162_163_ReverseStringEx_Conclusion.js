//Implement a function that reverses a string using iteration...and then recursion!

function revStrIter (str){
  //One way would be to have the string  as an array, pop the last char
  //and add it to the start of a new string...going through the entire initial string
  
  // let reverse = [];
  // strArr = str.split("");
  // while(strArr.length !== 0){
  //   reverse.push( strArr.pop() );
  // }
  // return reverse.join("");

  
  //Another way would be to swap first with last, 2nd to penultimate and so on;
  //This way we would go only half of the string

  let reverse = str.split("");
  let tempChar = "";
  
  for ( let i=0; i< Math.ceil( (reverse.length-1)/2 ) ; i++){
    tempChar = reverse[i];
    reverse[i] = reverse[ reverse.length -1 -i ];
    reverse[ reverse.length -1 -i] = tempChar;
  }
  return reverse.join("");
  
  
}

function revStrRec(str){
  //How to do it? You always take the first char of the string and do recursion with the rest of
  //the string ( from 2nd index to last one). In each iteration, the string will keep on srink
  //by one character. Once the string is empty, you need to stop

  // "hello" -> "ello" & "h"
  //             "llo" & "e"
  //              "lo" & "l"
  //               "o" & "l"
  //                "" & "o"

  // Now, if the string is empty, then you return also an empty string.
  //The empty string, you concatenate it with the char extracted in the enveloping function.
  //Then that result will be concatenated with the next saved char...and so on
  //and you go out of them but the characters go the other way around now.

  //How it would go by ...

  // 1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
  // 2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
  // 3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
  // 4th call – reverseString("lo")      will return   reverseString("o")              + "l"
  // 5th call – reverseString("o")       will return   reverseString("")               + "o"

  // Second part of the recursion method
  // The method hits the if condition and the most highly nested call returns immediately

  // 5th call will return reverseString("") + "o" = "o"
  // 4th call will return reverseString("o") + "l" = "o" + "l"
  // 3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  // 2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  // 1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  
  //Base scenario
  if (str === "") return "";
  

  //Recursive scenario

  return revStrRec(str.substring(1)) + str.charAt(0);
  
}


console.log(revStrIter("abcdef"));
console.log(revStrRec("abcdef"));