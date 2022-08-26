/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  if(nums[0] >= target) return 1;
  const dp = new Array(nums.length).fill(0);
  const sum = new Array(nums.length).fill(0);
  sum[0] = nums[0];
  let ans = 0;
  // 前缀和
  for(let i = 1; i < nums.length; ++i) sum[i] = sum[i - 1] + nums[i];

  // dp
  let right = -1, curr = 0;
  while(curr < target) {
    curr += nums[++right];
  }
  if(curr === target) {
    ans = dp[right] = right + 1;
  } else if(curr < target) {
    return 0;
  } else if(curr > target) {
    let cnt = 0, left = -1;
    while(curr >= target) {
      ++cnt; curr -= nums[++left];
    }
    ans = dp[right] = right + 1 - (cnt - 1);
  }
  for(let i = right + 1; i < nums.length; ++i) {
    let cnt = 0, left = i - dp[i - 1];
    let curr = sum[i] - (left - 1 < 0 ? 0 : sum[left - 1]);
    --left;
    while(curr >= target) {
      ++cnt; curr -= nums[++left];
    }
    ans = Math.min(ans ,(dp[i] = dp[i - 1] + 1 - (cnt - 1)));
  }
  return ans;
};
