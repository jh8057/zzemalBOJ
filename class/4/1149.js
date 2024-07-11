const inputs = require("fs")
  .readFileSync("../../input/1149.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs.shift());
const arr = inputs.map((el) => el.split(" ").map(Number));

//dp
const dp = Array.from({ length: N }, () => Array(3).fill(0));

//초기값
dp[0][0] = arr[0][0];
dp[0][1] = arr[0][1];
dp[0][2] = arr[0][2];

// O(N)
for (let i = 1; i < N; i++) {
  dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

let result = Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]);
console.log(result);

// //초기값
// let maxNum = Infinity;
// let queue = [];
// for (let i = 0; i < 3; i++) {
//   queue.push([arr[0][i], i, 1]);
// }

// //dfs > O(2^N)
// while (queue.length) {
//   const [sum, index, level] = queue.pop();
//   if (level === N) {
//     maxNum = Math.min(sum, maxNum);
//     continue;
//   }
//   for (let i = 0; i < 3; i++) {
//     if (i === index) continue;
//     else {
//       const next = sum + arr[level][i];
//       queue.push([next, i, level + 1]);
//     }
//   }
// }

// console.log(maxNum);
