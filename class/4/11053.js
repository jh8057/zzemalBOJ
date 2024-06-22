const inputs = require("fs")
  .readFileSync("../../input/11053.txt")
  .toString()
  .trim()
  .split("\n");

let N = +inputs.shift();
let arr = inputs
  .pop()
  .split(" ")
  .map((el) => +el);

let dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
