/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let ans = 0;
  const dp = new Array(s.length).fill(0);

  for(let i = 1; i < s.length; ++i) {
    if(s[i] === '(') {
      // dp[i] = 0;
    } else /* s[i] == ')' */ {
      // assert i - 1 >= 0
      if(s[i - 1] === '(') {
        dp[i] = 2 + (dp[i - 2] ?? 0);
      } else /* s[i - 1] === ')' */ {
        if(dp[i - 1] !== 0) {
          if(s[i - 1 - dp[i - 1]] === '(') {
            dp[i] = dp[i - 1] + 2 + (dp[i - 1 - dp[i - 1] + 1 - 1 - 1] ?? 0);
          } else {
            // dp[i] = 0;
          }
        }
      }
    }
    ans = Math.max(ans, dp[i]);
  }
  return ans;
};
