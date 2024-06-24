const inputs = require("fs")
  .readFileSync("../../input/12865.txt")
  .toString()
  .trim()
  .split("\n");

console.log(inputs);

let [N, K] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);
const dp = new Array(K).fill(0);

for (let i = 0; i < N; i++) {
  let [W, V] = inputs[i].split(" ").map((el) => +el);
  if (dp[W]) {
    dp[W] = Math.max(dp[W], V);
  } else {
    dp[W] = V;
  }
}

console.log(dp);
