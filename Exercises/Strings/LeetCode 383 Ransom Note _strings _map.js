// 383. Ransom Note
// Easy

// Given two strings ransomNote and magazine, return true if ransomNote can be
// constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 10**5
// ransomNote and magazine consist of lowercase English letters.
//-------------------------------------------------------------------------------------------------
const canConstruct = function (ransomNote, magazine) {
  //
  const mapMag = {};

  //hash table with key=letter and value=how many times the letter appears
  for (let i = 0; i < magazine.length; i++) {
    if (!mapMag[magazine.charAt(i)]) {
      mapMag[magazine.charAt(i)] = 1;
    } else {
      mapMag[magazine.charAt(i)]++;
    }
  }

  //traverse ransomNote and operate on mapMag
  for (let i = 0; i < ransomNote.length; i++) {
    const curRansLetter = ransomNote.charAt(i);

    //in case the letter from ransomNote cannot be found in mapMag, return false
    if (!mapMag[curRansLetter]) return false;

    //At this stage, the letter must be present; you subtract its count number
    //and if gets below 0, then we consumed everything
    mapMag[curRansLetter]--;
    if (mapMag[curRansLetter] < 0) return false;
  }

  return true;
};

const ransomNote = "aabaccx";
const magazine = "aaabbbccdeeeeefg";

console.log(canConstruct(ransomNote, magazine));

//----------------------------------------------------------
//Another way:
//In case ransomNote has enough letters to be created from magazine ->if you take the
// letters from ransomNote and, for each match, you subtract
//the letter from magazine, at the end lengthOfInitialMagazine = lengthRansomNote + lengthWhatRemainedFromMagazine;
//otherwise you should return false

//in JS you can use String.prototype.replace(letter, '') -> once a letter has been found, you delete it from
//magazine by replacing with an empty character;
