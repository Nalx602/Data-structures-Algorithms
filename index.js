//   Selection sort

//How it works:
//Again, imagine you have a list of unsorted numbers put into an array;

//You start from the 1st position ( index 0) and you record that elem as being
//the smallest number you are aware of existing in the array; 
//Then, start going through the array & compare index0 with index1, index2 etc. 
//Once you found an elem smaller than the one from index0, you record the new
//index as being the smallest elem and continue to compare this new index with 
//the other ongoing positions remaining in the array; each time an elem is 
//smaller than the one you recorded as being the smallest, you update which
//is the index with the smallest number; you do this until you finish the array;
//Once you have the index of the smallest elem, you swap it with elem from index0;
//So now you are sure the smallest elem of the array is as index0;

//Next iteration shall do the same thing but starting with index1 as being the
//smallest ... and you do the same thing over again and, at the end, the second
//smallest elem will be at index1.

//Once you do this to n times, all elems will be sorted

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function swap(arr, i, j) {
  //swapping arr[i] with arr[j]
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    //loop i will count for bringing smallest remaining elem
    //to the indexes at the left of the array
    
    let indexOfSmallest = i;//1st time, smallest is array[0]
    
    for (let j = j+1; j < array.length; j++) {
      //once we selected the smallest as being the 1st elem
      //of the unsorted array, loop j will be responsible for going
      //to the rest of the array, till the remained of the array;
      if (array[j] < array[indexOfSmallest]) {
        indexOfSmallest = j;
      }
    }
  }
}