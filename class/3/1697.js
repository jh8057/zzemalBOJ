const inputs = require("fs")
  .readFileSync("../../input/1697.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

let count = 0;
let value = N;
let left = 0;
while (true) {
  count++;
  value *= 2;
  let half = parseInt(value / 2);
  if (Math.abs(K - value) < half) {
    left = Math.abs(K - value);
    break;
  }
}

let arr = [0];
for (let i = count; i > 0; i--) {
  let num = Math.pow(2, i);
  let count = parseInt(left / num);
  if (count > 0) {
    left -= count * num;
    arr.push(count);
  } else {
    arr.push(0);
  }
}

let sum = arr.reduce((arr, pre) => arr + pre, 0);
console.log(sum + left);
