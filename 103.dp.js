/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount).fill(undefined);
  dp[0] = 0;
  for (let currAmount = 0; currAmount < amount; ++currAmount) {
    for (const coin of coins) {
      if (dp[currAmount] === undefined) continue;
      if (dp[currAmount + coin] === undefined) {
        dp[currAmount + coin] = dp[currAmount] + 1;
      } else {
        dp[currAmount + coin] = Math.min(dp[currAmount] + 1, dp[currAmount + coin]);
      }
    }
  }
  return dp[amount] ?? -1;
};