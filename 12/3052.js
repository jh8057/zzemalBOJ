const input = require("fs")
  .readFileSync("../input/3052.txt")
  .toString()
  .trim()
  .split("\n");

let result = [...new Set(input.map((el) => el % 42))].length;

console.log(result);
