/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // accumulate
  const sum = new Array(rows).fill(undefined).map(() => new Array(cols).fill(undefined));
  // fill sum[0]
  sum[0][0] = matrix[0][0];
  for (let currRow = 0; currRow < rows; ++currRow) {
    if (currRow === 0) {
      for (let currCol = 1; currCol < cols; ++currCol) {
        sum[0][currCol] = sum[0][currCol - 1] + matrix[0][currCol];
      }
      continue;
    }
    for (let currCol = 0; currCol < cols; ++currCol) {
      if (currCol === 0) sum[currRow][currCol] = sum[currRow - 1][currCol] + matrix[currRow][currCol];
      else sum[currRow][currCol] = sum[currRow - 1][currCol] + sum[currRow][currCol - 1] - sum[currRow - 1][currCol - 1] + matrix[currRow][currCol];
    }
  }

  // dp
  const dp = [];
  let maxVal = matrix[0][0];
  let ans = [0, 0, 0, 0];
  const acc = (row1, col1, row2, col2) =>
    sum[row2][col2]
    - (sum[row1]?.[col2] ?? 0) - (sum[row2]?.[col1] ?? 0)
    + (sum[row1]?.[col1] ?? 0);

  for (let top = -1; top < rows; ++top) {
    for (let bottom = top + 1; bottom < rows; ++bottom) {
      dp[0] = acc(top, -1, bottom, 0);
      let left = 0;
      for (let i = 1; i < cols; ++i) {
        const currV = acc(top, i - 1, bottom, i);
        if (currV >= currV + dp[i - 1]) left = i;
        dp[i] = Math.max(currV + dp[i - 1], currV);
        if (dp[i] > maxVal) {
          maxVal = dp[i];
          ans = [top + 1, left, bottom, i];
        }
      }
    }
  }
  return ans;
};

console.log(getMaxMatrix(
  [
    [9, -8, 1, 3, -2],
    [-3, 7, 6, -2, 4],
    [6, -4, -4, 8, -7],
  ]))