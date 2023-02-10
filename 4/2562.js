const input = require("fs")
  .readFileSync("../input/2562.txt")
  .toString()
  .split("\n")
  .map((el) => +el);

let answer = 0;
let index = 0;
for (let i = 0; i < 9; i++) {
  if (input[i] > answer) {
    answer = input[i];
    index = i;
  }
}

console.log(answer);
console.log(index + 1);
