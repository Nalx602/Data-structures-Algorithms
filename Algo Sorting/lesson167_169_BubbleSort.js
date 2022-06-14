// "ELEMENTARY sorts"
// Bubble sort takes part of the "elementary sorts" category:
// 1. Bubble sort
// 2. Insertion sort
// 3. Selection sort
// They are very simple to understand and the algo is not so complex.
//But they have some drawbacks

// "COMPLEX sorts"
// 1. Merge Sort
// 2. Quick Sort



//             Bubble sort 

//How it works:
//This sorting algorithm is a comparison-based algorithm in which each pair of adjacent 
//elements is compared and the elements are swapped if they are not in order. 
//Let us assume we have an array [6,5,3,1,8,7,2,4];
//You swap 6 with 5, then 6 with 3, 6 with 1, 6 and 8 remain like that....etc;
//At the first iteration through the elems, the highest number will end at the very 
//end of the array as, when the max is reached, it will always have to move to the right 
//when being compared. So with one pass of the array, the max gets to the right;
//Then you consider the same array except the last elem ( as already will be higher than all);
//And you keep on doing the same thing, bringing the highest elem of the remaining array to
//the right; and then you exclude the penultimate elem also from next iteration etc.
//So for each elem to put it in the right position, you traverse the entire array once;
//So time complexity is O(n^2) and space complexity is O(1);


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(arr, i) {
  //swapping elem at index i with the one from index i+1
  let temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
  return arr;
}

function bubbleSort(array) {

  let unsortedArrLength = array.length; // this is the lenght of the array of which
  //elems you are not sure if they are sorted; it will keep on decreasing by 1 after
  //you find the maximum in each iteration of the remaining array;

  for (let j = 0; j < array.length; j++) {
    //j loop  will have to run n times, n being the number of elems, to make
    //sure all of them have been gone through;
    for (let i = 0; i < unsortedArrLength; i++) {
      if (array[i] > array[i + 1]) {
        array = swap(array, i)
      }
    }
    unsortedArrLength--; //shortening the length 
  }
}

bubbleSort(numbers);
console.log(numbers);