const reverse = function (x) {
  let result = 0;
  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = (x - (x % 10)) / 10;
  }
  if (result <= -2147483651 || result >= 2147483651) {
    return 0;
  }
  return result;
};

console.log(reverse(245));
