const inputs = require("fs")
  .readFileSync("../../input/9251.txt")
  .toString()
  .trim()
  .split("\n");

const [arr1, arr2] = inputs;
const L1 = arr1.length;
const L2 = arr2.length;

const dp = Array.from({ length: L1 }, () =>
  Array.from({ length: L2 }, () => 0)
);
for (let i = 0; i < L1; i++) {
  for (let j = 0; j < L2; j++) {
    if (arr1[i] === arr2[j]) {
      // same character
      dp[i][j] = (dp[i - 1]?.[j - 1] || 0) + 1;
    } else {
      dp[i][j] = Math.max(dp[i]?.[j - 1] || 0, dp[i - 1]?.[j] || 0);
    }
  }
}

console.log(dp[L1 - 1][L2 - 1]);
