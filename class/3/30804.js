const inputs = require("fs")
  .readFileSync("../../input/30804.txt")
  .toString()
  .trim()
  .split("\n");

console.log(inputs);

const N = +inputs.shift();
const arr = inputs[0].split(" ").map((el) => +el);

let dp = [];
let obj = {};

for (let i = 0; i < N; i++) {
  if (obj[arr[i]]) {
    dp[i] = dp[i - 1];
  } else {
    if (i === 0) dp[0] = 1;
    else dp[i] = dp[i - 1] + 1;
    obj[arr[i]] = true;
  }
}
