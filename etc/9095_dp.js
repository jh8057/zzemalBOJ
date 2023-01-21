let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("../input/9095.txt").toString().split("\n");
const caseLEN = Number(input[0]);
const dp = {
  0: 0,
  1: 1,
  2: 2,
  3: 4,
};
let max = Math.max(...input);

for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

let answer = "";
for (let i = 1; i <= caseLEN; i++) {
  answer += dp[input[i]] + "\n";
}
console.log(answer.trim());

//ref
// https://sihyungyou.github.io/baekjoon-9095/
