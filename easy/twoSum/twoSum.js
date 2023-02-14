function twoNumberSum(array, targetSum) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let num2 = array[j];
      if (num1 + num2 === targetSum && num1 !== num2) {
        result.push(num1, num2);
      }
    }
  }
  return result;
}

exports.twoNumberSum = twoNumberSum;
