// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and
// two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored
// inside the array nums1. To accommodate this, nums1 has a length of m + n, where the
// first m elements denote the elements that should be merged, and
// the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// ----------------------------------------------------------------------------------------------------------------------

//You've done this exercise before but you were allowed to create a 3rd array and picked from 1st and 2nd array the elems
//at index[0], compared them and adding them to 3rd array;Now you are not allowed that. You have to work on nums1 all the time;
//Instead of going comparing the 1st elems of each array (the smallest of each), you can compare the biggest of each
//and add it at very end of empty spaces of nums1 ( the right-most 0). For that, you need 3 pointers:

// - one which will start from the very end on nums1 = [1,2,3,0,0,0] indexMax
//                                                                ↑
//- one which will start from the biggest of nums1 = [1,2,3,0,0,0]  indexNums1
//                                                        ↑
//- one which will start from the biggest of nums2 = [2,5,6]  indexNums2
//                                                        ↑
//You keep on going from right to left until indexNums1 or indexNums2 are finished

const merge = function (nums1, m, nums2, n) {
  let indexNums1 = m - 1;
  let indexNums2 = n - 1;
  let indexMax = nums1.length - 1;

  //In case nums1 has only 0s but nums2 has elements, put elems from nums2 in nums1
  if (m === 0 && nums2.length) {
    for (let i = 0; i < nums2.length; i++) {
      nums1[i] = nums2[i];
    }
    return;
  }

  //In case nums2 is empty, nums1 remains the same, so exit the fct
  if (!nums2.length) return;

  while (indexNums2 >= 0) {
    //you have to go as long as nums2's numbers have been put in the correct place;
    //nums2 cannot go beyond left side of nums1, as m+n=nums1.length;
    nums1[indexMax] =
      nums1[indexNums1] > nums2[indexNums2]
        ? nums1[indexNums1--]
        : nums2[indexNums2--];
    indexMax--;
  }
};

// let nums1 = [1, 2, 3, 0, 0, 0];
// const nums2 = [2, 5, 6];

// let nums1 = [3];
// const nums2 = [];

let nums1 = [2, 0];
const nums2 = [1];

merge(nums1, 1, nums2, 1);
console.log(nums1);
