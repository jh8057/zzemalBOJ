const inputs = require("fs")
  .readFileSync("../input/2512.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs[0]);
const arr = inputs[1].split(" ").map((el) => Number(el));
const M = Number(inputs[2]);

let left = parseInt(M / N);
let right = Math.max(...arr);

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let sum = 0;
  // calc sum
  for (let i = 0; i < N; i++) {
    if (arr[i] > mid) {
      sum += mid;
    } else {
      sum += arr[i];
    }
  }

  // judge sum & move mid
  if (sum <= M) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
