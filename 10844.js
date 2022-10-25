let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = Number(fs.readFileSync("./input/10844.txt").toString().trim());

const dp = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

for (let i = 0; i < input; i++) {
  dp.push(new Array(10).fill(0));
}

for (let n = 1; n < input; n++) {
  for (let i = 0; i <= 9; i++) {
    dp[n][i] = ((dp[n - 1][i - 1] || 0) + (dp[n - 1][i + 1] || 0)) % 1000000000;
  }
}
const result = dp[input - 1].reduce((acc, curr) => {
  return (acc + curr) % 1000000000;
}, 0);

console.log(result);
