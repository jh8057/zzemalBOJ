const input = require("fs")
  .readFileSync("../input/2559.txt")
  .toString()
  .split("\n");

const [N, K] = input
  .shift()
  .split(" ")
  .map((el) => +el);

const arr = input[0].split(" ").map((el) => +el);
const prefix = [0];

for (let i = 1; i <= N; i++) {
  prefix[i] = prefix[i - 1] + arr[i - 1];
}
console.log(prefix);

let max = Number.MIN_SAFE_INTEGER;
for (let i = K; i <= N; i++) {
  max = Math.max(max, prefix[i] - prefix[i - K]);
}
console.log(max);
