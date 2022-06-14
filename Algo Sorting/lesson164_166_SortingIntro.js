//                Sorting


// Bubble Sort
// Insertion Sort
// Selection Sort
// Merge Sort
// Quick Sort

//The issue with sort()
const letters  = ['a', 'd', 'z', 'e', 'r', 'b'];
const basket  = [2, 65, 34, 2, 1, 7, 8];

letters.sort()
console.log(letters);// [ 'a', 'b', 'd', 'e', 'r', 'z' ]

basket.sort()
console.log(basket);// [ 1, 2, 2, 34, 65, 7, 8 ] ???
// When you use the default sort methods of the programming language, make sure you
//know what it does under the hood; .sort() in JS looks at the ASCI code of the elem
//and sorts it. So he will compare "65" and "7" as characters..and "6" is lower as an ASCII code;

//Also  these default sorting methods do not guarantee the time/space complexity.

//Most likely you will not need to implement a sorting algo from scratch in a job, but 
//it is good to know how they are implementing as that is how you will understand pros/cons,
//when to use what algo and what time/space complexity;

// To visually help you see the dif between sorting, see below link
// https://www.toptal.com/developers/sorting-algorithms

