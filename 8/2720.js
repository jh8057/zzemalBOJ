const input = require("fs")
  .readFileSync("../input/2720.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

let answer = [];
for (let i = 0; i < T; i++) {
  let target = input[i];

  let q = parseInt(target / 25);
  target -= q * 25;

  let d = parseInt(target / 10);
  target -= d * 10;

  let n = parseInt(target / 5);
  target -= n * 5;

  let p = target;

  answer.push([q, d, n, p].join(" "));
}
console.log(answer.join("\n"));
