// 387. First Unique Character in a String
// Easy

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// Constraints:

// 1 <= s.length <= 10**5
// s consists of only lowercase English letters.

const firstUniqChar = function (s) {
  //you can use a Map to store key:value pairs;
  // the key=letter & value = an Object { times: how many times that letter appeared, firstPos: index where it was 1st seen};

  //String.charAt(i) returns the characher at i-th position in the string, starting from 0
  //map.set(key,value) -> set a value to the key
  //map.get(key,value) -> get a value
  //map.has(key) -> checks if a map has a key
  //map.keys() -> gives an iterable of keys {key1, key2....}
  //maps.values() -> gives an iterable of values {val1, val2 ...}
  //map.entries() -> gives an iterable of key:value pairs {[key1,val1], [key2,val2], ...}
  let uniqueChars = new Map();

  for (let i = 0; i < s.length; i++) {
    let letter = s.charAt(i);
    if (uniqueChars.has(letter)) {
      uniqueChars.set(letter, { times: Infinity }); //in case the letter appears more than once, make it different than "1"
    } else {
      uniqueChars.set(letter, {
        times: 1,
        firstPos: i,
      });
    }
  }

  myIter = uniqueChars.entries(); //this will be an iterable;

  //This is a "for (let var of iterable) " loop, each entry in iterable will be in = var each loop;
  //so you can work on var as you like
  for (let entry of myIter) {
    if (entry[1].times === 1) return entry[1].firstPos;
  }

  return -1;
};

const myString = "aadadaad";
console.log(firstUniqChar(myString));

//Another way to look at this is to use Array.indexOf(); Make the string into array
//it returns the first index at which a given element can be found in the array, or -1 if it is not present.
