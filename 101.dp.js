/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    if(nums.length === 1) return false;
    if(nums.length === 2) return nums[0] === nums[1];
    const sum = nums.reduce((sum, v) => sum + v, 0);
    if(sum & 1 !== 0) {
        // 奇数
        return false;
    }

    const dp = new Array(nums.length).fill(0)
               .map(() => new Array(sum / 2 + 1).fill(false));
    for(let i = 0; i < nums.length; ++i) {
        dp[i][0] = true;
        dp[i][nums[0]] = true;
    }

    for(let v = 1; v <= sum / 2; ++v) {
        for(let i = 1; i < nums.length; ++i) {
            if(v >= nums[i]) dp[i][v] = dp[i - 1][v - nums[i]] || dp[i - 1][v];
            else dp[i][v] = dp[i - 1][v];
        }
    }
    return dp[nums.length - 1][sum / 2];
};
