/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let longestStr = "";

  const callback = function (leftPos, rightPos) {
    while (leftPos >= 0 && rightPos < s.length && s[leftPos] === s[rightPos]) {
      leftPos--;
      rightPos++;
    }
    if (rightPos - leftPos > longestStr.length) {
      longestStr = s.slice(leftPos + 1, rightPos);
    }
  };

  for (let i = 0; i < s.length; i++) {
    callback(i, i + 1);
    callback(i, i);

    if ((s.length - i) * 2 < longestStr.length) {
      break;
    }
  }
  return longestStr;
}
