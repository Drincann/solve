/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // dp[n] = '(' + dp[i] + ')' + dp[n - i]
  const cache = [];
  const dp = (currN) => {
    if (cache[currN]) return cache[currN];
    if (currN === 0) return [''];
    const ans = [];
    for (let i = 0; i < currN; ++i) {
      const inners = dp(i);
      const outers = dp(currN - i - 1);
      for (const inner of inners) {
        for (const outer of outers) {
          ans.push('(' + inner + ')' + outer);
        }
      }
    }
    return ans;
  };
  return dp(n);
};
console.log(generateParenthesis(3))