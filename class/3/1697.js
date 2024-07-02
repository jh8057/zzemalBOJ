const inputs = require("fs")
  .readFileSync("../../input/1697.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

console.log(N, K);

let count = 0;
let value = N;
let left = 0;
while (true) {
  count++;
  value *= 2;
  let half = parseInt(value / 2);
  console.log("a", Math.abs(K - value), half);
  if (Math.abs(K - value) < half) {
    left = Math.abs(K - value);
    break;
  }
}
console.log(count, left);

for (let i = count; i > 0; i--) {
  let num = Math.pow(2, i);
  console.log(num);
}
