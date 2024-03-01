const inputs = require("fs")
  .readFileSync("../input/1654.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = inputs[0].split(" ").map((el) => Number(el));
const arr = inputs.slice(1).map((el) => Number(el));

const sum = arr.reduce((acc, prev) => acc + prev, 0);

let left = 0;
let right = Math.floor(sum / N);

let answer = 0;

while (left < right) {
  let mid = Math.floor((left + right) / 2);

  let totalSum = 0;

  arr.forEach((line) => {
    let numberOfLines = Math.floor(line / mid);
    totalSum += numberOfLines;
  });

  answer = mid;
  // n개여도 최대값을 구해야되서 left > right 인 경우까지 끝까지 돌려야됨
  if (totalSum < N) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);
