/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if(s === '') return 0;
  const dp = new Array(s.length).fill(1);
  const map = new Map([[s[0], 0]]);
  let ans = 1;
  for(let i = 1; i < s.length; ++i) {
    if(map.has(s[i])) {
      const mid = map.get(s[i]);
      const start = i - 1 - dp[i - 1] + 1;
      const end = i - 1;

      dp[i] = end - mid + 1;
      for(let j = start; j < mid; ++j) {
        map.delete(s[j]);
      }
    } else {
      dp[i] = dp[i - 1] + 1;
    }
    map.set(s[i], i);
  }

  return Math.max(...dp);
};
