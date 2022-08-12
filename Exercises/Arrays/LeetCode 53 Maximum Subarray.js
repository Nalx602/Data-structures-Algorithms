// LeetCode 53 Maximum Subarray
// Medium

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// -----------------------------------------------

// you can try and compute each contiguous subarray possible (not be optimal); for it, you will have a left bound(LB) and a right bound(RB);
//you start with LB at pos 0, RB will start from 0 and gradually go till the end ...and make every possible subarray; then you go LB to pos1
//and RB from pos1 to the end ...and make each possible subarray...and so on until you get with LB = RB = the last elem

// O(n) solution (Kadane's algorithm):

//Let's assume you are looking at the array and notice a subarray you would think it is a good option to declare it as the max
//subarray and you save it somewhere...saying I have a subarray with the sum = X;
// how do you verify it if it's the max? Well can you improve it or not or is there another alltoghether?
//To improve it, you can look at the subarray + the element at its right; then you decide if adding the elem helps; Or you can look at the
//elem on the right by himself and check if he is already better than your existing subarray;

//The thing is, if you get to a subarray and find the next elem by itself is better than the (subarray + next elem), you are better of
//ditching the subarray and have the next elem to build the new subarray.

//So, as you keep going left ->right, you have to ask yourself, do you continue existing subarray w/ new item to its right VS
//start with new elem

// you also must make a way to always monitor the max subarray that exists.

const maxSubArray = function (nums) {
  let maxSum = nums[0];
  let maxSumCurrWindow = nums[0];

  //[-2,1,-3,4,-1,2,1,-5,4]
  // "-2" will be the initial subarray, which will be the best so far -> maxSum = -2 ; maxSumCurrWindow = -2
  //then you go to "1";is [-2, 1] better than [1] by itself? No. So you ditch [-2,1] arr for [1] arr; maxSum=1; maxSumCurrWindow=1
  //[1,-3] vs [-3] ? [1,-3] is better ; maxSum=1; maxSumCurrWindow=-2;
  //[1,-3] vs [4] ? [4] is better so we ditch [1,-3] ; maxSum=4; maxSumCurrWindow=4;
  //[4,-1] vs [-1]? [4,-1] is better ; maxSum=4; maxSumCurrWindow=3;
  ///...end so on;; at the end you will have maxSum preserving the max sum of the subarrays you went through

  for (let i = 1; i < nums.length; i++) {
    //in case adding next elem is better
    if (maxSumCurrWindow + nums[i] >= nums[i]) {
      maxSumCurrWindow = maxSumCurrWindow + nums[i];
      if (maxSumCurrWindow > maxSum) {
        maxSum = maxSumCurrWindow;
      }
    } else {
      //in case just having next elem is better
      maxSumCurrWindow = nums[i];
      if (maxSumCurrWindow > maxSum) {
        maxSum = maxSumCurrWindow;
      }
    }
  }

  return maxSum;
};

const myArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(myArray));
