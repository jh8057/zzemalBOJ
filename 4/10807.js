const input = require("fs")
  .readFileSync("../input/10807.txt")
  .toString()
  .split("\n");

let [N, arr, v] = input;
arr = arr.split(" ");
console.log(arr.filter((el) => el === v).length);
