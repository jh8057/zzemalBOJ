const inputs = require("fs")
  .readFileSync("../../input/2579.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

const N = +inputs.shift();
const dp = [];

for (let i = 0; i < N; i++) {
  if (i === 0) {
    dp[0] = inputs[i];
  } else if (i === 1) {
    dp[1] = dp[0] + inputs[i];
  } else {
    dp[i] = Math.max(
      (dp[i - 3] || 0) + inputs[i - 1] + inputs[i],
      dp[i - 2] + inputs[i]
    );
  }
}

console.log(dp.pop());

// dp 뿐 아니라 input값도 잘 활용해서 발화식을 세우자
