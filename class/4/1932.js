const inputs = require("fs")
  .readFileSync("../../input/1932.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs.shift());
const arr = inputs.map((el) => el.split(" ").map((el) => Number(el)));

const dp = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    dp[i][j] =
      Math.max(dp[i - 1]?.[j - 1] || 0, dp[i - 1]?.[j] || 0) + arr[i][j];
  }
}

console.log(Math.max(...dp[dp.length - 1]));
