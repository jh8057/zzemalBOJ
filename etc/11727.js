let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = Number(fs.readFileSync("../input/2741.txt").toString());
const dp = {
  1: 1,
  2: 3,
};

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

// console.log(dp);
console.log(dp[input]);
