const input = require("fs")
  .readFileSync("../input/1018.txt")
  .toString()
  .split("\n");

const [M, N] = input.shift().split(" ");

console.log(input, M, N);
