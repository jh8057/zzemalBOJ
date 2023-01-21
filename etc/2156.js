let fs = require("fs");
let input = fs.readFileSync("../input/2156.txt").toString().trim().split("\n");

let n = Number(input.shift());
const dp = {};

let arr = input.map((el) => +el);

dp[0] = arr[0];

if (n > 1) dp[1] = arr[0] + arr[1];

if (n > 2) dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2], dp[1]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + arr[i] + arr[i - 1],
    dp[i - 2] + arr[i],
    dp[i - 1]
  );
}

console.log(dp[n - 1]);

// https://yabmoons.tistory.com/512

// const [N, ...a] = require('fs').readFileSync('dev/stdin').toString().split('\n').map(Number);
// const dp = new Array(N).fill(0);

// dp[0] = a[0];
// dp[1] = a[0] + a[1];
// dp[2] = Math.max(a[0] + a[2], a[1] + a[2], dp[1]);

// for(let i = 3; i < N; i++) {
// 	dp[i] = Math.max(dp[i-2] + a[i], dp[i-3] + a[i-1] + a[i], dp[i - 1]);
// }
// console.log(dp[N-1]);
