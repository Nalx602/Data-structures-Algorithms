// LeetCode 1 Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// ---------------------------------------------------------------

//One way would be to try all combinations, check their sum and return the indexes - O(n^2)

//Another way would be to go at each index, calculcate val = "target - nums[index]" and search for that
//value in the remainder of the array ( always remember the indexes) O(n^2)

//A third way, as you pass through the array once, each elem will add an entry in a  hash table where :
// - elem value = key name in your hash map
// - elem index in array = key value in your hash map
//
// [2,7,11,15] & target = 9 =>
//   {
//     '2' : 0,
//     '7' : 1,
//     '11' : 2,
//     '15' : 3
//   }
//
// As you go, you also check if "target - elem value" exists in the hash map;
// The result will be found at the time when you are at the complimentary elem
//
// Eg: if you are at index 0, the hash map will be empty, so you go to next elem;
// now you are at index "1" in the loop, with elem value ="7"; at that stage, the hash map is:
//   {
//     '2' : 0,
//   }
// You check target 9 - your elem 7 = 2. Is "2 " in the hash map? Yes -> return an array = to
// [ key value in your hash map for key name "2", index 1]

const twoSum = function (nums, target) {
  const hashDiff = {};
  let opposite = null;

  for (let i = 0; i < nums.length; i++) {
    opposite = target - nums[i];

    if (hashDiff.hasOwnProperty(opposite)) {
      return [hashDiff[opposite], i];
    } else {
      hashDiff[nums[i]] = i;
    }
  }
};

nums = [-1, -2, -3, -4, -5];

console.log(twoSum(nums, -8));
