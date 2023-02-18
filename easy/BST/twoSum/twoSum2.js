function twoNumberSum2(array, targetSum) {
  let newArray = array.sort((a, b) => a - b);
  console.log(newArray);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let currentSum = newArray[left] + newArray[right];
    if (currentSum === targetSum) {
      return [newArray[left], newArray[right]];
    } else if (currentSum < targetSum) {
      left += 1;
    } else if (currentSum > targetSum) {
      right -= 1;
    }
  }
  return [];
}

exports.twoNumberSum = twoNumberSum2;
