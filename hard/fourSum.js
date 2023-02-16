function fourNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let sumDigits = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let leftSide = j + 1;
      let rightSide = array.length - 1;
      while (leftSide < rightSide) {
        let sum = array[i] + array[j] + array[leftSide] + array[rightSide];
        if (sum === targetSum) {
          sumDigits.push([
            array[i],
            array[j],
            array[leftSide],
            array[rightSide],
          ]);
          leftSide++;
          rightSide--;
        } else if (sum < targetSum) leftSide++;
        else rightSide--;
      }
    }
  }
  return sumDigits;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
