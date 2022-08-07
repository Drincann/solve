/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  const dfs = (str, leftRest, rightRest, allowCnt) => {
    if (rightRest === 0) return ans.push(str);
    if (leftRest > 0) dfs(str + '(', leftRest - 1, rightRest, allowCnt + 1);
    if (allowCnt > 0) dfs(str + ')', leftRest, rightRest - 1, allowCnt - 1);

    // for (let allow = 0; allow <= allowCnt; ++allow) {
    // dfs(str + ')'.repeat(allow) + '(', leftRest - 1, rightRest - allow, allowCnt + 1 - allow);
    // }
  };
  dfs('(', n - 1, n, 1);
  return ans;
};
console.log(generateParenthesis(3))