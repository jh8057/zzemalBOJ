const inputs = require("fs")
  .readFileSync("../../input/12865.txt")
  .toString()
  .trim()
  .split("\n");

console.log(inputs);

let [N, K] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

const arr = inputs.map((el) => el.split(" ").map(Number));
arr.sort((a, b) => a[0] - b[0]);
console.log(arr);
