// Quick Sort

//It is one of the most used sorting algorithims;
//It is a divide-&-conquer strategy, divind the problem in a set of smaller, 
//simillar problems and solve those problems; It uses a pivoting tehnique by 
//gettting elements in a "sorted postion";

//An element is in a "sorted position" if all the elements on its left-hand side
//are smaller then him & all the elements on its right-hand side are higher
//then him;

//Example of array A = [10, 16, 8, 12, 15, 6, 3, 9, 5];

//We note 2 indexes on it, to store the ends of the array we working on;
// a low ( l = A[0] ) 
// a high ( h = A[length-1] ) 
//We choose the first element ( A[0] = 10) as being the pivot & we want to 
//find the "sorted position" of A[0] = 10; So:
//- any el from left-hand side and greater then 10 -> move to the right of 10
//- any el from right-hand side and lower then 10 -> move to the left of 10
//Note: it does not matter the index where the elems will end on the
// right/left sides, they just need to be on the correct side;

//Now, to do that, we will use 2 indexes which will traverse the array
//left-> right ( i ) and right->left ( j );
// i will start from l, j will start from h;
//          l                           h
//     A = [10, 16, 8, 12, 15, 6, 3, 9, 5];
//pivot=10  i->                       <-j

// i will search for elems > then pivot ( i can go till end of array)
// j will search for elems < pivot ( j can go till pivot );
//but if j gets lower than i, you stop;


//            Partitioning procedure
//this is the procedure to find the "sorted position";

//---------------------------------------------------------------------------
//Increment i until you find an el > 10 & Decrement j until you find en el < 10 :
//     A = [10, 16, 8, 12, 15, 6, 3, 9, 5];
//pivot=10      i                       j
// i found el 16, j found el 5 -> 
//Now exchange them
//     A = [10, 5, 8, 12, 15, 6, 3, 9, 16];
//pivot=10      i                       j
//-----------------------------------------------------------------------------
//Again, move i until you find an el > 10 & move j until you find en el < 10:
//     A = [10, 5, 8, 12, 15, 6, 3, 9, 16];
//pivot=10            i             j
//Now exchange them
//     A = [10, 5, 8, 9, 15, 6, 3, 12, 16];
//pivot=10            i             j
//-----------------------------------------------------------------------------
//Move i and j
//     A = [10, 5, 8, 9, 15, 6, 3, 12, 16];
//pivot=10               i      j
//Now exchange them
//     A = [10, 5, 8, 9, 3, 6, 15, 12, 16];
//pivot=10               i      j
//-----------------------------------------------------------------------------
//Move i and j:
//     A = [10, 5, 8, 9, 3, 6, 15, 12, 16];
//pivot=10                  j  i
//Once j becomes less than i, the index where j is, will be the position
//of the pivot -> swap the pivot with the elem from index j (swap 6 with 10) =>
//     A = [6, 5, 8, 9, 3, 10, 15, 12, 16];
//          \.........../  ^   \......../
//            unsorted     |    unsorted
//                         |
//you can see "10" is now in the "sorted position", also called the "partitioning
//position" (left side has smaller elem and right side has larger elems); 
//-----------------------------------------------------------------------------

//Now there are 2 subarrays which are not sorted, onto which we can do quicksort
//recursively on either side, with their respective ends l & h and choosing
//their 1st element as the pivot:
//    [6, 5, 8, 9, 3]    &    [15, 12, 16]
//    l            h          l        h
//    i->        <-j          i->    <-j
//   pivot=6               pivot=15
//We keep on doing this until we have singleton arrays ( Base scenario);
//Notes:
// - if the array we are working on has a single elem, then that array is sorted;
// - if j reaches the pivot, that means the pivot is already in "sorted position";

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, l, r){
  //Finding the sorted position of the pivot elem ( pivot elem = arr[0]);

  let pivot =  arr[l];
  let i = l+1;
  let j = r;

  while(true) {//keep in the loop until  j< i,
    //then we know we found the j sorted position
    
    //scanning with i and j
    while( arr[i] <= pivot && i <= r) i++;
    while( arr[j] >= pivot && j > l) j--;//in case j reaches the position in front of pivot
    //and needs to decrement still, then you need to stop, as it will enter the loop anyway;
    //you know in the next loop the while condition will fail;

    
    //So now i and j have been moved 
    
    if (j < i) break;// checking if i and j crossed each other and break
    //from the loop if so; otherwise keep on swapping & moving i/j
    
    swap(arr,i, j);//this swap will not happen when crossing happens;
    //you don't want t
  }

  //swap default pivot el with the calculated "sorted position" j
  swap(arr, l, j);
  return j;
  
}

function quickSort(arr, l=0, h=arr.length-1){
  //we've set the default left and right values;
  //if they are not specified, they will be index 0 and last index of the arr;
  //when doing recursion, we will overwrite them;
  
  //You will need to do this recursively

  let sortedPos = null;

  //Base scenario is when the unsorted subarrays are singletons, so i on top of j
  if ( l===h ) return j;

  sortedPos = partition(arr, l, h)

  //Recursion

  quickSort(arr, l , sortedPos);
  quickSort(arr, sortPos+1, h);
  
}

const testArr = [100, 16, 8, 12, 15, 6, 3, 9, 5];

quickSort(testArr);
console.log(testArr);













// Time complexity is O(n * log n) and space complexity is O(logn);
//Quick sort has a O(n^2) time complexity when it comes to worst case;
//If you cannot guarantee the pivot was chosen efficiently, the 
//time complexity might be worse than Merge Sort ( for which the worst
//time complexity scenario will reach O(n logn) )

