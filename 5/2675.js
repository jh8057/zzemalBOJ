const input = require("fs")
  .readFileSync("../input/1152.txt")
  .toString()
  .trim()
  .split(" ");

let answer = input.filter((v) => v).length;
console.log(answer);
