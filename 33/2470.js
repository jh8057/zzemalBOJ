const inputs = require("fs")
  .readFileSync("../input/2470.txt")
  .toString()
  .trim()
  .split("\n");

const N = +inputs[0];
const arr = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let minSum = Infinity;
let answer = [];

while (left < right) {
  let sum = arr[left] + arr[right];
  if (Math.abs(sum) < Math.abs(minSum)) {
    minSum = sum;
    answer = [arr[left], arr[right]];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(answer.join(" "));
