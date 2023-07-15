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

const twoSum = (nums, target) => {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        let num1 = nums[i]
        for(let j = 0; j < nums.length; j ++){
            let num2 = nums[j];
            if(i !== j && num1 + num2 === target){
                result.push(i, j)
                return result;
            }
        }
    }
    return result;
}
