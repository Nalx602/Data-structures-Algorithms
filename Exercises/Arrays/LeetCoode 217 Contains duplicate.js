// 217. Contains Duplicate
// Easy

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
// ----------------------------------------------

// you can create an object and add properties to it with the name equal to the value
//of each individual elem of the array ;

//used hasOwnProperty to check if the object already has that number property being added

const containsDuplicate = function (nums) {
  const testObj = {};
  testObj[nums[0]] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (testObj.hasOwnProperty(nums[i])) {
      return true;
    } else {
      testObj[nums[i]] = nums[i];
    }
  }

  return false;
};

const myArray = [0, 4, 5, 0, 3, 6];

console.log(containsDuplicate(myArray));
