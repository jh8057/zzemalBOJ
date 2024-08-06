const inputs = require("fs")
  .readFileSync("../../input/12865.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

const arr = inputs.map((el) => el.split(" ").map(Number));

const dp = new Array(K + 1).fill(0);

for (let i = 0; i < N; i++) {
  let [w, v] = arr[i];
  for (let j = K; j - w >= 0; j--) {
    dp[j] = Math.max(dp[j], dp[j - w] + v);
  }
}

console.log(dp[K]);
