// LeetCode 350. Intersection of Two Arrays II

// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// Constraints:
// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that
// you cannot load all elements into the memory at once?
// ----------------------------------------------------------------------------------------------

//So, the intersection is a list of common elements present in both arrays;
//If an elem appears 1 time in one array and 1 time in 2nd array = add elem only once in result
//If an elem appears 1 time in one array and 2 times in 2nd array = add elem also only once in res
//If an elem appears 2 times in one array and 2 times in 2nd array = add elem twice in the res
//...and so on

//You create a map for nums1, with :
// - key name = el from array
// - key value = how many times the val appears in the array

const intersect = function (nums1, nums2) {
  let number = [];
  let map = new Map();

  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1); //in case the map has the key already increment its value with 1
    } else {
      map.set(n, 1); //otherwise add new key with starting value of 1
    }
  }

  console.log(map);

  //Now we will have to go through nums2, for an elem in it, we will check if the map has an entry
  //for it; if it has, we will substract 1 from its value, we will add that key to "number" and remove
  //the key if its value reached 0;

  for (const m of nums2) {
    if (map.has(m)) {
      number.push(m);
      map.set(m, map.get(m) - 1);
      if (map.get(m) === 0) {
        map.delete(m);
      }
    }
  }

  return number;
};

// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));

//Another way could have been to sort the arrays; then place a pointer for each array at the start; going
// from left to right, once you hit a common elem, you check how many times it repeats in both places and
//that many times you put it in "number"; then you go to the next values in the arrays;
