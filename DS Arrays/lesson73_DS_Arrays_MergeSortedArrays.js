//Given 2 arrays that are sorted, can you merge these 2 arrays in a single one that is also sorted?
// mergeSortedArrays([ 0, 3, 4, 31], [ 4, 6, 30]);
//It should result in array [ 0, 3, 4, 4, 6, 30, 31]

const mergeSortedArrays = function (arr1, arr2) {
  //we need to check if the input type are arrays & that their content are numbers
  //NaN = not a number; In JS you can check if a data is not a number with function isNan(x);
  //some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.

  if (
    !Array.isArray(arr1) ||
    !Array.isArray(arr2) ||
    arr1.some(isNaN) ||
    arr2.some(isNaN)
  ) {
    return "Invalid data";
  }

  //1st idea, merge the 2 arrays then sort it, takes a lot of time complexity

  //another idea would be to create a 3rd array, you look at the 1st el of 1st array;
  //if it is lower or equal then 1st el of 2nd array, you add it to the final array and remove it from 1st array;
  //now you do the same thing; in case it is not lower or equal, then you add the 1st el of the 2nd array and
  //remove it from there; and so on until you deplete the arrays;

  //.shift() - removes & returns 1st el of an array

  // [ 0, 3, 4, 31]
  //   ^
  // [ 4, 6, 30]
  //

  let [firstArr, secondArr] = [arr1, arr2];
  let mergedSortedArray = [];

  while (firstArr.length !== 0 && secondArr.length !== 0) {
    firstArr[0] <= secondArr[0]
      ? mergedSortedArray.push(firstArr.shift())
      : mergedSortedArray.push(secondArr.shift());
  }
  //once one of the arrays is depleted, the other array will have only higher numbers
  //so you just append the rest of it to "mergedSortedArray"

  //return [...mergedSortedArray,...firstArr,...secondArr];//or you can use below...
  return mergedSortedArray.concat(firstArr, secondArr);
};

testArr1 = [0, 3, 4, 31, 78, 89, 90];
testArr2 = [-4, 6, 30, 40, 80];

console.log(mergeSortedArrays(testArr1, testArr2));
