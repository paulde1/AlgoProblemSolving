// const myAtoi = function (s) {
//   let result = [];
//   for (let i = 0; i < s.length; i++) {
//     let num = s[i];
//     if (!isNaN(Number(num))) {
//       if (Number(num) !== 0) {
//         result.push(num);
//       }
//     }
//   }
//   result = Number(result.join(""));
//   if (result <= -2147483651 || result >= 2147483651) {
//     if (result < 0) return -2147483651;
//     return 2147483651;
//   }
//   if (s.includes("-")) return result * -1;
//   return result;
// };

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (str) {
  if (!str) return 0;

  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  str = str.trim();

  let i = 0;
  const isNeg = str[0] === "-";
  const isPos = str[0] === "+";

  if (isNeg) i++;
  else if (isPos) i++;

  let number = 0;
  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    number = number * 10 + (str[i] - "0");
    i++;
  }

  number = isNeg ? -number : number;

  if (number < INT_MIN) return INT_MIN;
  if (number > INT_MAX) return INT_MAX;

  return number;
};
