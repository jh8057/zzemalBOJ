let [N, ...arr] = require("fs")
  .readFileSync("../input/2108.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

arr.sort((a, b) => a - b);
let cnt = {}; // or Make array

for (let i = 0; i < arr.length; i++) {
  if (cnt[arr[i]]) {
    cnt[arr[i]] += 1;
  } else {
    cnt[arr[i]] = 1;
  }
}
let cntArr = Object.keys(cnt);
let max = -4001;
let answer = [];
for (let i = 0; i < cntArr.length; i++) {
  if (cnt[cntArr[i]] > max) {
    max = cnt[cntArr[i]];
    answer = [Number(cntArr[i])];
  } else if (cnt[cntArr[i]] === max) {
    answer.push(Number(cntArr[i]));
  }
}
answer.sort((a, b) => a - b);
let step1 = Math.round(arr.reduce((pre, cur) => pre + cur, 0) / N);
if (step1 === -0) step1 = 0;

let mid = Math.floor(N / 2);
let step3 = answer.length > 1 ? answer[1] : answer[0];

console.log(step1);
console.log(arr[mid]);
console.log(step3);
console.log(arr[N - 1] - arr[0]);

// 배열 속도
// https://velog.io/@seop/Javascript-Array-Object-Spread-%EC%86%8D%EB%8F%84-%EB%B9%84%EA%B5%90
