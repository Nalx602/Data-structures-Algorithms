// 242. Valid Anagram
// Easy

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or
// phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 10**4
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
//---------------------------------------------------------------------

// One way, very slow, where you find and cut one letter from the other

// const isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   //Another way is to go through s, take 1st letter and, if found in t, you replace it with empty char '';
//   //If anagram, t must be empty length at the end

//   //The String.prototype.replace():
//   //it returns a new string with one, some, or all matches of a pattern replaced by a replacement.The pattern
//   //can be a string or a RegExp, and the replacement can be a string or a function called for each match. If
//   //pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

//   for (let i = 0; i < s.length; i++) {
//     currLet = s.charAt(i);
//     t = t.replace(currLet, ``);
//   }

//   if (t.length === 0) {
//     return true;
//   } else return false;
// };

// const s = "rat";
// const t = "car";

// console.log(isAnagram(s, t));

//---------------------------------------------------------------------
//Another way is to sort the 2 strings, they should be identical at the end

// const isAnagram = function (s, t) {
//   const sArr = s.split("").sort().toString();
//   const tArr = t.split("").sort().toString();

//   if (sArr === tArr) {
//     return true;
//   } else return false;
// };

// const s = "anagram";
// const t = "nagaram";

// console.log(isAnagram(s, t));

//---------------------------------------------------------------------

//Last, we can make a map from s with the key=letter & val = how many times the letter appears
//Then you go to t, as you iterate through it you keep substracting if it is found.
//Then the map of s needs to have all the key values =0 to be an anagram;

const createMap = function (str) {
  const mapStr = new Map();

  for (let i = 0; i < str.length; i++) {
    const currLet = str.charAt(i);

    if (!mapStr.has(currLet)) {
      mapStr.set(currLet, 1);
    } else {
      mapStr.set(currLet, mapStr.get(currLet) + 1);
    }
  }

  return mapStr;
};

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const mapS = createMap(s);
  const mapT = createMap(t);

  //get the keys for each
  keysS = mapS.keys();
  keysT = mapT.keys();

  for (let el of keysS) {
    //check if the keys from s appear in t
    if (!mapT.has(el)) return false;

    //if the keys appear, check their value as well
    if (mapS.get(el) !== mapT.get(el)) return false;
  }

  return true;
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));
