function longestBalancedSubstring(string) {
  const isBalanced = (string) => {
    let stack = [];
    for (let char of string) {
      if (char === "(") stack.push("(");
      else if (stack.length > 0) stack.pop();
      else return false;
    }
    return stack.length === 0;
  };

  let maxLength = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 2; j < string.length + 1; j += 2) {
      if (isBalanced(string.slice(i, j))) {
        let currentLength = j - i;
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  }
  return maxLength;
}

//! O(n^3) - time , due to the fact that
//! O(n) - space , due to the fact that n will be equal to the size of the string
// Do not edit the line below.
exports.longestBalancedSubstring = longestBalancedSubstring;
