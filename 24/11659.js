const input = require("fs")
  .readFileSync("../input/11659.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input);
const [N, M] = input.shift().split(" ");
console.log(N, M);
