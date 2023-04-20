const input = require("fs")
  .readFileSync("../input/11005.txt")
  .toString()
  .trim()
  .split(" ");

let [N, B] = input.map((el) => +el);

console.log(N.toString(+B).toUpperCase());
