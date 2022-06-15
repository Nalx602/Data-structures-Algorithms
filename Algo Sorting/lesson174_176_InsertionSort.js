//   Insertion Sort

//How it works:

//It iterates through the array left->right. As it goes along, it takes each 
//elem and move it to the left of the array in a position so that it is sorted.
//This will create an array with 2 parts:
// - a left part from the elem we are at, part which is sorted
// - a right part from the elem we are at, part which is not yet sorted (but will be);

//In order to start, you will choose the 1st elem and he will be the initial
//sorted part of the array ( only one elem);

//Then you go to the 2nd elem; as you know the part of the array to the left is
//sorted, you place it in the correct position, to the left or right of the 1st
//elem by comparing it with 1st elem; if it is smaller than 1st elem, you swap
//1st elem with the 2nd elem; if it is bigger than 1st elem, you keep it to the
//right of the 1st elem; now your left side( which is sorted), has 2 elements

//Now you go to the 3rd elem and you keep comparing it to the 2nd elem, then 1st elem
//and so on and place it the correct place;

//Then the 4th elem, you compare it to its left ( as that is the highest of the
//sorted part of the array) and keep on going left until you find its position.

// Note: when you find a position for an elem in the left side of the array,
//you have to shift all the larger values to right; you do this by taking the 
//elem which we want to position in the right place and decide if we will
//swap it with its left or not; 
//if it is smaller than his left, we swap it and keep on looking to the left;
//if it is higher then his left, we leave it there and go to the next elem 
//that needs to be put into place

//Graphic example:
// https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif


//Insertion sort start to be more efficient then bubble or selection sort;
//In some cases, it can be the fastest; It is efficient when the list is 
//almost sorted or completed sorted but you are not 100% sure;
//In best scenarion it can be O(n) as you don't need to do any swaps;
//Worst and average scenarion will be O(n^2)

// INSERTION SORT -> USE IT FOR NEARLY SORTED LISTS or SMALL DATA LISTS !!!

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, -100];


function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr [j];
  arr[j] = temp;

  return arr;
}

function insertionSort(array){
  for (let i = 1; i<array.length; i++){
    //this loop iterates through entire array starting from 2nd position till end;
    //i will be the index of the elem we try to fit into the left side (sorted bit);

    //how many elems will have the sorted array to the left? it will be i;
    //what it will be the first index we have to compare with from left array? it will be i-1;
    let currPosLeftArr = i-1;// currPosLeftArr + 1 will be the elem we try to fit in;
    
    while( ( array[currPosLeftArr + 1] < array[currPosLeftArr] ) && currPosLeftArr >= 0 ){
      
      //while our elem is smaller then his left & the left position has still a place to 
      //keep on going left, we keep on testing swapping
      array = swap(array, currPosLeftArr + 1, currPosLeftArr );
      
      currPosLeftArr--;//so swapped our elem with his left...we have to keep on checking 
      //with the next left so we decrement the left position we compare our elem with; 
    }
  }
}

insertionSort(numbers);
console.log(numbers);







