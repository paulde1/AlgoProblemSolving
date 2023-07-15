var nextGreaterElements = function (nums) {
  //first check if the length of input is = 1, if so return [-1]
  //create two stacks = one for resutls and the other as a container;

  //create two helper functions to dry up code one to get last element in container
  //and the other to check if container is empty

  //loop through nums starting at 2 * (nums.length -1), let i >= 0 ; i--
  //while empty function returns false & nums[lastNumber] is <= nums[i %numsl.length] pop the container
  //set results[i %numsl.length] = !isEmpty() ? nums[last()] : -1;
  //push (i % nums.length)

  //return that result
  //O(n) space and time
  if (nums.length === 1) return [-1];
  const result = [];
  const stack = [];

  const last = () => stack[stack.length - 1];
  const isEmpty = () => stack.length === 0;

  for (let i = 2 * nums.length - 1; i >= 0; i--) {
    while (!isEmpty() && nums[last()] <= nums[i % nums.length]) stack.pop();
    result[i % nums.length] = !isEmpty() ? nums[last()] : -1;
    stack.push(i % nums.length);
  }
  return result;
};
