// Merge Sort and O(n log n)

//It uses Divide & Conquer  ( Quick sort uses it also);
//It uses recursion;
//We will get O(n logn) time complexity but O(n) space complexity

//How it works

// Lets say we have array [6,5,3,1,8,7,2,4];
//You take the array and split it in 2 halves : [6,5,3,1] & [8,7,2,4]
//Again, the result 2 arrays, you split each in half:
//[6,5] [3,1] [8,7] [2,4] ...and you keep on doing that until you
//have unitary arrays: [6] [5] [3] [1] [8] [7] [2] [4]

//NOTE:for odd arrays like [1,2,3] -> [1,2] & [3] 
//then next step -> [1] & [2] & [3]

//Once you have split everything into singleton arrays, you start 
//merging them toghether but in a sorted way; you combine 1st singleton 
//with 2nd, 3rd with 4th etc., until you reach a list of subarrays
//each of length=2; then you merge again one with another, until you
//will reach subarrays each of length=4 ...and so on until you reach
//the initial array;

//NOTE: the 2 subarrays that you merge are already sorted, by merging
//them you must make sure the bigger resulting array is sorted again
//for the next merge;

//But, when merging them, how will they be merged in sorted way? 
//So you have 2 subarrays and you want to create a sorted array from them;
//The rule is, take each of 1st elem of the 2 subarrays that you want to merge,
//compare them and which one is smaller will be the 1st elem in the bigger,
//sorted array; now, because the 2 subarrays are already sorted, 
//taking their 1st elem assures us that they are the smallest value of the
//2 respective subarrays -> which one is smallest from these 2 1st 
//elements, for sure will be the smallest from the entire group; so it is 
//ok to put it at the beginning of the sorted array; 
//once an elem has been added to the sorted array, it must be popped out from
//the originating subarray, exposing the next elem from that subarray for
//comparison next time;
//So, in conclusion, you take the 1st elements of each subarray, compare
//them, which one is smallest is popped out of his subarray and goes to 
//the sorted array; then you compare again the 1st elements of the subarrays,
//which one is smallest is popped again and added to next position of
//the sorted array until one of the subarrays remains without elements;
//Once that happens, the other subarray can be merged to the end
//of the sorted array, as you are sure they are bigger then the other
//elements & also are sorted;

//Eg:[6] [5] [3] [1] [8] [7] [2] [4]
//    [5,6]   [1,3]   [7,8]   [2,4]
//You want to combine [5,6] with [1,3] -> 5?1 ->1 (pop it and add it to the array)
//                    [5,6] with [3] ->  5?3 ->3 (pop it and add it to the array)
//                    [5,6] with [] -> other subarray is empty, so add it at the end
//[1,3,5,6]

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, -100];

function merge(arr1, arr2){
  //Given 2 arrays which are sorted, this fct will return the merged sorted array;
  const mergSortArr = [];

  //.shift() pops the 1st el of an array, shortening the array
  while( arr1.length > 0 && arr2.length > 0 ){
    arr1[0] < arr2[0] ? mergSortArr.push(arr1.shift()) : mergSortArr.push(arr2.shift());
    //at the end of this loop, one of the arrays will be empty;
  }

  //adding the rest of the remaining subarray
  arr1.length === 0 ? mergSortArr.push(...arr2) : mergSortArr.push(...arr1);
  return mergSortArr;  
}

//We will have to split the arr in singletons in a recursive way;

//function mergeSort(arr) steps:
//1. the base scenario - when left & right are length = 1;
//2. some code which will split the array in 2 sub arrays> left & right
//3. call itself twice in a loop : mergeSort(left), mergeSort(right);
//and these results to be used in fct merge, which we will return;


//Now, somewhere in between we will have to do the merging:
//You do "merge(mergeSort(left),mergeSort(right))";
//You can see that each merge invokes the split of left & right
//again, as they have to go through mergeSort;
//Once it gets to singletons, arr.length === 1 -> the singleton
//is returned ...you will have merge(singleton, singleton) ->
//the merged array will be returned and serve as an input for 
//the next merge(mergeSort(left), mergeSort(right));


function mergeSort(arr){

  //Below is the base scenario
  if(arr.length === 1) return arr;

  //Below is the recursive scenario
  let left, right = [];
  let indexMiddle = Math.floor( arr.length/2 );//arr.length =7
  // 7/2 =3.5 -> indexMiddle=3, so left arr 0->3 , right 4->6;
  //It doesn't really matter which one will be longer

  //slice(start,end)-> copy of the arr including start index excluding end
  //slice(start) - > copy of the arr including start up to the end of arr
  left = arr.slice(0, indexMiddle);//will not include indexMiddle
  right = arr.slice(indexMiddle);//will include indexMiddle up to finish;

  return merge (mergeSort(left), mergeSort(right) );  
  
}

console.log( mergeSort( numbers ) );