function twoNumberSum1(array, targetSum) {
  let container = {};
  for (let number of array) {
    let currentSum = targetSum - number;
    if (currentSum in container) {
      return [currentSum, number];
    }
    container[number] = true;
  }
  return [];
}

exports.twoNumberSum = twoNumberSum1;
