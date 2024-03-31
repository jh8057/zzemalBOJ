let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let [n, x] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

let maxVisitors = 0;
let maxPeriods = 0;

let windowSum = visitors.slice(0, x).reduce((a, b) => a + b, 0);

if (windowSum > maxVisitors) {
  maxVisitors = windowSum;
  maxPeriods = 1;
}

//슬라이딩 윈도우.

for (let i = x; i < n; i++) {
  windowSum = windowSum - visitors[i - x] + visitors[i];
  if (windowSum > maxVisitors) {
    maxVisitors = windowSum;
    maxPeriods = 1;
  } else if (windowSum === maxVisitors) {
    maxPeriods++;
  }
}

if (maxVisitors === 0) {
  console.log("SAD");
} else {
  console.log(maxVisitors);
  console.log(maxPeriods);
}
