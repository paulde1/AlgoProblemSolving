/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

//1209. Remove All Adjacent Duplicates in String II
// const removeDuplicates = function(s, k) {
//   let string = s.split('');
//  let length = -1;

//  while(length !== string.length) {
//      length = string.length;
//      let count = 1;
//      for(i = 0; i < string.length; i++){
//          if( i === 0 || string[i] !== string[i - 1]) {
//              count = 1
//          } else {
//              count++
//              if(count === k) {
//                  string.splice( i - k + 1, k);
//                  break
//              }
//          }
//      }
//  }

// return string.join('')
// };

//if a char !match the previous one, we push 1 to the stack. Otherwise, we increment the count on the top of the stack.

const removeDuplicates = function (s, k) {
  let string = s.split("");
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i] !== string[i - 1]) stack.push(1);
    else stack[stack.length - 1]++;
    if (stack[stack.length - 1] === k) {
      stack.pop();
      string.splice(i - k + 1, k);
      i = i - k;
    }
  }

  return string.join("");
};

// O(n) time
// space - O(1) constant
