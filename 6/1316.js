const input = require("fs")
  .readFileSync("../input/1316.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
let dic = {};
let answer = 0;
for (let i = 0; i < N; i++) {
  let target = input[i];
  let count = 1;
  dic[target[0]] = 1;
  for (let j = 1; j < target.length; j++) {
    if (
      !dic[target[j]] ||
      target[j] == target[j + 1] ||
      target[j] == target[j - 1]
    ) {
    } else {
      count = 0;
      break;
    }
    dic[target[j]] = 1;
  }
  answer += count;
  dic = {};
}

console.log(answer);
