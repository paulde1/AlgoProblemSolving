/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  //create a results stack
  //for of every num in num1
  //set a query variable as -1;
  //loop through num2 with i = the index of num in num2 + 1, and i < num2.length
  //check if num2[i] is greater than num
  //if so set query = to that value and break out loop
  //push query into result stack

  // return result

  let result = [];
  for (let num of nums1) {
    let flag = -1;
    for (let i = nums2.indexOf(num) + 1; i < nums2.length; i++) {
      if (nums2[i] > num) {
        flag = nums2[i];
        break;
      }
    }
    result.push(flag);
  }
  return result;
};
