const input = require("fs")
  .readFileSync("../input/2745.txt")
  .toString()
  .trim()
  .split(" ");

const [N, B] = input;

console.log(parseInt(N, B));
