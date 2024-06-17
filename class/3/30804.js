const inputs = require("fs")
  .readFileSync("../../input/30804.txt")
  .toString()
  .trim()
  .split("\n");

console.log(inputs);

const N = +inputs.shift();
