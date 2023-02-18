/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  //    let sumIndices = [];
  //    for(let i = 0; i < nums.length; i++) {
  //        let num1 = nums[i];
  //     for(let j = i + 1; j < nums.length; j++){
  //            let num2 = nums[j];
  //            if(num1 + num2 === target) {
  //              sumIndices.push(i,j);
  //            }
  //        };
  //    };
  //    return sumIndices;
  // };
  //O(n^2)
  //O(n)

  //can possibly use a map to reduce time complexity
  let container = {};
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (difference in container) return [i, container[difference]];
    container[nums[i]] = i;
  }
};
// O(n)
//O(n)
