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
