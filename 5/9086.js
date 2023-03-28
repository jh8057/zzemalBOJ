const input = require("fs")
  .readFileSync("../input/9086.txt")
  .toString()
  .split("\n");

const N = input.shift();

let answer = "";
for (let i = 0; i < N; i++) {
  let target = input[i];
  answer += target[0] + target[target.length - 1] + "\n";
  // console.log(`${char[i].slice(0, 1)}${char[i].slice(-1)}`);
}

console.log(answer.trim());
