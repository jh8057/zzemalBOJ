// let fs = require("fs");
// // let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let input = Number(fs.readFileSync("../input/10844.txt").toString());

// // const dp = { 1: 1, 2: 1 };

// // for (let i = 3; i <= input; i++) {
// //   dp[i] = dp[i - 1] + dp[i - 2];
// // }
// // console.log(dp[input]);

const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trimRight());

const d = new Array(N + 1).fill(BigInt(0));
d[1] = BigInt(1);
for (let i = 2; i <= N; i++) d[i] = d[i - 1] + d[i - 2];
console.log(d[N].toString());
