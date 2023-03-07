const myAtoi = function (s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let num = s[i];
    if (!isNaN(Number(num))) {
      if (Number(num) !== 0) {
        result.push(num);
      }
    }
  }
  result = Number(result.join(""));
  if (result <= -2147483651 || result >= 2147483651) {
    if (result < 0) return -2147483651;
    return 2147483651;
  }
  if (s.includes("-")) return result * -1;
  return result;
};
