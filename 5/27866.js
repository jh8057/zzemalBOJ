const input = require("fs")
  .readFileSync("../input/27866.txt")
  .toString()
  .split("\n");

console.log(input[0][input[1] - 1]);
