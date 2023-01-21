let [N, ...arr] = require("fs")
  .readFileSync("../input/2108.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

console.log(N, arr);
