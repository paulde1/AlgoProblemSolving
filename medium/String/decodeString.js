/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  //create a stack
  //loop through the string - for of
  //if the char doesnt equal ']' push it into the stack and continue;
  //set the curent = last value in stack
  //create an empty string variable
  //while current doesnt equal '['
  //add current to string (current = string + current) and reset current to last item in stack

  //create a number string variable
  //set the curent = last value in stack
  //as long as the current is a number (Number.isNan(Number(current)))
  //set number = current + num
  //reset the curent = last value in stack

  //push current into stack
  //push string.repeat(Number(num)) into stack

  //join and return stack
  const stack = [];

  for (let character of s) {
    if (character !== "]") {
      stack.push(character);
      continue;
    }
    let current = stack.pop();
    let string = "";
    while (current !== "[") {
      string = current + string;
      current = stack.pop();
    }
    let number = "";
    current = stack.pop();
    while (!Number.isNaN(Number(current))) {
      number = current + number;
      current = stack.pop();
    }
    stack.push(current);
    stack.push(string.repeat(Number(number)));
  }
  return stack.join("");
};
