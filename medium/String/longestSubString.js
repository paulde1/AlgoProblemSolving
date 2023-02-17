//start at index 1
//loop through string, check for repeaded characters
//update longest string
//return longest string .length
const lengthOfLongestSubstring = function (s) {
  let longestSubStr = "";
  for (let i = 1; i < s.length - 1; i++) {
    //n
    if (!longestSubStr.includes(s[i])) longestSubStr += s[i]; //n
  }
  return longestSubStr.length;
};

// //O(n^2) - time
// //O(n) - n is equal to the length of the string
// lengthOfLongestSubstring('') // 0
// lengthOfLongestSubstring('p') //1
// lengthOfLongestSubstring('1g$^&')//5

//hashMap solution to reduce time complexity
const lengthOfLongestSubstring = function (s) {
  let visited = new Map();
  let start = 0;
  let length = 0;

  for (i = 0; i < s.length; i++) {
    if (visited.has(s[i])) start = Math.max(visited.get(s[i]) + 1, start);
    visited.set(s[i], i);

    length = Math.max(i - start + 1, length);
  }
  return length;
};

//O(n) - time depend on the lenghth of string
//O(n) - due to lenght of string
