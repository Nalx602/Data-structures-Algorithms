//         Which sort is the best?

// Insertion sort should be used when the items are a few or items are
//almost sorted. Also easy to implement in code.

//Bubble sort & Selection sort - don't use it - not efficient

//Merge Sort - Best, Average and Worst case scenarios are
//always O( n logn) - so use it when you need to be mindful of time complexity 
// of worst case scenarios

// Quick Sort - if you are not worried about the worst case scenario
//then use this one, as, in practice, it is the fastest;

//Heap sort - it has time complex O( n logn) and space complex O(1)..
//so this one should be the best ? Well, in practice Quick sort 
//is still fastest. Use heap sort if space complexity must be 
//really low.

//        Radix Sort and Counting Sort

//Up to now, the O( n logn ) was given to us by the divide-and-conquer 
//technique. Can we beat O (n logn) ? Mathematically it is impossible
//to beat this. This minimum time complexity is due to the nature
//of the algorithms, where we compare elems with each other.

//But you can skip comparison sorting algorithm for some type of
//data and use non-comparison algorithms. Counting Sort and
//Radix Sort are these kind of sorting algo, they only work with
//numbers (integers); but it does not work on any type of data, as
//it is based on the way the numbers are stored in the computer's
//memory.

// Radix Sort: https://brilliant.org/wiki/radix-sort/
// Radix Sort Animation: https://www.cs.usfca.edu/~galles/visualization/RadixSort.html

// Counting Sort: https://brilliant.org/wiki/counting-sort/
// Counting Sort Animation: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html


// Exercise to choose your sorting algorithm:

//#1 - Sort 10 schools around your house by distance: 
//A : Insertion Sort ( small data size so it will be fast, easy to implement)

//#2 - eBay sorts listings by the current Bid amount:
//A : as this is a price, so a number... and it is within a margin - > radix sort

//#3 - Sport scores on ESPN
//A: Quick Sort ( large data, very different type of data, )

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//A :  Heap sort ( solves space complex) but the course says Merge sort

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//A : Insertion Sort - very good for almost sorted data

//#6 - Temperature Records for the past 50 years in Canada
// Quick Sort as it is fast, but also Insertion Sort as they are almost sorted.

//#7 - Large user name database needs to be sorted. Data is very random.
// Quick Sort or Merge Sort if we are worried about memory space.

//#8 - You want to teach sorting for the first time
// A: Bubble sort, Selection Sort