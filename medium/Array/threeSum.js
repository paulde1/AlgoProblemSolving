const threeSum = function (nums) {
  if (nums.length < 3) return [];
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1] && i > 0) continue;

    let next = i + 1;
    let end = nums.length - 1;

    while (next < end) {
      const sum = nums[i] + nums[end] + nums[next];
      if (sum === 0) {
        result.push([nums[i], nums[next], nums[end]]);
        while (nums[next] === nums[next + 1]) next++;
        while (nums[end] === nums[end - 1]) end--;
        next++;
        end--;
      } else if (sum > 0) {
        end--;
      } else {
        next++;
      }
    }
  }
  return result;
};
