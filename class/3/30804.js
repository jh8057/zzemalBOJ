const inputs = require("fs")
  .readFileSync("../../input/30804.txt")
  .toString()
  .trim()
  .split("\n");

const N = +inputs.shift();
const S = inputs[0].split(" ").map((el) => +el);

let fruitCount = Array(10).fill(0);
let start = 0;
let end = 0;
let maxLen = 0;
let typeCount = 0;

while (end < N) {
  let endFruit = S[end];
  if (fruitCount[endFruit] === 0) typeCount++;
  fruitCount[endFruit]++;

  while (typeCount > 2) {
    // 2종류가 넘어가는 순간 왼쪽 포인터 움직여서 맞춰주기
    let startFruit = S[start];
    fruitCount[startFruit]--;
    if (fruitCount[startFruit] === 0) typeCount--;
    start++;
  }

  maxLen = Math.max(maxLen, end - start + 1);
  end++;
}

console.log(maxLen);

// sliding window , two pointer
