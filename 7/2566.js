const input = require("fs")
  .readFileSync("../input/2566.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);
