//Given 2 arrays, create a function that let's a user know (true/false) whether
//these two arrays contain any common items
//For Example:
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','i'];
//should return false.
//------------
//const array1= ['a','b','c','x'];
//const array2= ['z','y','x'];
//should return true

// 2 parameters
// it will return true/false

//After we asked the interviewer, we find that the 2 input parameters are arrays;

//We can ask the interviewer if the 2 arrays can be very large? Answer - infinitely large ( so we should care about time/space complexity).
//First talk your initial idea out. Even if it is like the easiest and brute //force one.

//Brute force:
//We will compare the first letter of array1 with each letter of array2.
//So this is a case of nested loops -> O(n^2). Even though it is not the best
//solution, you must let the interviewer know how you think.


//O(n^2) solution
/*
function containsCommonItem (arr1, arr2) {
  let bool = false;
  arr1.forEach(el1 =>{
    arr2.forEach(el2 =>{
      console.log(el1,el2);
      if (el1 === el2) {
        console.log('We found a common item!');
        bool= true;
        }
    })
  });
  return bool;
}

const array1 = ['a','b','c','x'];
const array2 = ['z','y','i'];
const array3= ['z','y','x'];

containsCommonItem(array2,array3);
*/

//-----------------------
//Way to improve time complexity is to take arr1 and make it an //object, where each property is named as elems of the array and //their value is always true. Then, as you iterate through arr2, //you check if the arr2 element is a property of arr1.
/*
const array1 = ['a','b','c','x'];
const array2 = ['z','y','i'];
const array3= ['z','y','x'];

function containsCommonItem2(arr1, arr2){
  let bool = false;

  //creating an object from arr1, by looping it
  let map = {};
  arr1.forEach(el =>{
    if (!map[el]){//first you need to check that property has not been already created
      map[el]=true;
    }
  });

  console.log(map);
  console.log(arr2);

  //loop through arr2 and check if its element is a property of map
  arr2.forEach(elArr2 =>{
      if (map[elArr2]) bool=true;
  });

  return bool;

  //You can see you now have 2 loops independent of each other
  //so we got O(2*n) ->O(n)
}

containsCommonItem2(array3, array2);
//now you want to break your function, testing its inputs, poke holes
//into your solution;
*/

//-------------
//Even faster, using syntactic sugar:

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['z', 'y', 'x'];

function containsCommonItem3(arr1, arr2) {
  return (arr1.some(el => arr2.includes(el)));
}

containsCommonItem3(array1, array3);