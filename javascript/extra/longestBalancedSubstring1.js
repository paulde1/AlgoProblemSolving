function longestBalancedSubstring1(string) {
  //! using one lope in stead 0f 2c to save time
  //create a stack and place an unlikely index # inside
  //keep track of the value to return
  //loop through the string
  //push or pop index based on opening parentheses
  //if the length is 0 of stack then also push index
  //else take the substing from the last index added and the current lenght
  //set that to the max length
  //return max length

  let maxLength = 0;
  let stack = [];
  stack.push(-1);

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") stack.push(i);
    else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        let balancedIndex = stack[stack.length - 1];
        let length = i - balancedIndex;
        maxLength = Math.max(maxLength, length);
      }
    }
  }
  return maxLength;
}

// Do not edit the line below.
exports.longestBalancedSubstring = longestBalancedSubstring1;
