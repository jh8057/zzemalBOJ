const input = require("fs")
  .readFileSync("../input/10798.txt")
  .toString()
  .trim()
  .split("\n");

let answer = "";
let max = Math.max(...input.map((el) => el.length));
for (let i = 0; i < max; i++) {
  for (let j = 0; j < input.length; j++) {
    answer += input[j][i] || "";
  }
}

console.log(answer);
