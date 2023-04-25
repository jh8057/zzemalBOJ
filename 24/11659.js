const input = require("fs")
  .readFileSync("../input/11659.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let arr = input
  .shift()
  .split(" ")
  .map((el) => +el);

let sum = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  sum[i] = sum[i - 1] + arr[i - 1];
}

let answer = [];
for (let i = 0; i < M; i++) {
  let [start, end] = input[i].split(" ").map((el) => +el);
  let result = sum[end] - sum[start - 1];
  answer.push(result);
}

console.log(answer.join("\n").trim());
