//Maximum Nesting Depth of the Parentheses
/**
 * @param {string} s
 * @return {number}
 */

//loop through the string
//check the depth by keeping track of opening and closing parenthesis
//compare and reset count as needed
const maxDepth = function (s) {
  let counter = 0;
  let maxCounter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") counter++;
    if (s[i] === ")") counter--;
    maxCounter = Math.max(maxCounter, counter);
  }
  return maxCounter;
};
