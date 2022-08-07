/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const words = new Set(wordDict);
  const lengths = new Set(wordDict.map(word => word.length));
  const dp = new Array(s.length).fill(false);
  for (let i = -1; i < s.length; ++i) {
    if (i !== -1 && dp[i] === false) continue;
    for (const length of lengths) {
      if (words.has(s.slice(i + 1, length))) {
        dp[i + length] = true;
      }
    }
  }
  return dp[s.length - 1];
};

console.log(wordBreak('leetcode', ["leet", "code"]))