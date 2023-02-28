/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //declare left and rignt sum to be 0
  let sumRight = 0;
  let sumLeft = 0;
  //for each to go throught the array , adding every num to right sum
  nums.forEach((num) => (sumRight += num)); //O(n)
  //loop through the array  ;
  //grab current number
  //subtract number from right sum

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    sumRight -= currentNum;

    if (sumLeft === sumRight) return i;
    sumLeft += currentNum;
  }

  //check if leftsum = right sum if so return index
  //otherwise add current to leftsum

  return -1;
};
