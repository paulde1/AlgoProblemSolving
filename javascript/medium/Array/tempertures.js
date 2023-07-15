/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// grab the length in a variable
//create a stack using Array and fill it with 0
//nested loop to grab each temp
// if tempj > tempi stack [i] = j-i
//break out the loop
//return the stack
// const dailyTemperatures = function(temperatures) {
//     let length = temperatures.length;
//     let stack = Array(length).fill(0);
// for(let i = 0; i < length; i++){
//     for(let j = i + 1 ; j< length; j++){
//         if(temperatures[j] > temperatures[i]){
//             stack[i] = j - i;
//             break;
//         }
//     }
// }
// return stack;
// }

//O(n^2) - time due to nested loop
//O(1 space) - no extra space needed;

//set variable for hot
//got throught the array backwards
// reset if current temp is > hot
//continue searching

//set variable for day = 1
//cache results
const dailyTemperatures = function (temperatures) {
  let length = temperatures.length;
  let stack = Array(length).fill(0);
  let hot = 0;
  for (let i = length - 1; i >= 0; i--) {
    let current = temperatures[i];
    if (current > hot) {
      hot = current;
      continue;
    }
    let day = 1;
    while (temperatures[i + day] <= current) {
      day += stack[i + day];
    }
    stack[i] = day;
  }
  return stack;
};
