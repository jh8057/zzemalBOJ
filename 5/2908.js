const input = require("fs")
  .readFileSync("../input/2908.txt")
  .toString()
  .split(" ");

let [num1, num2] = input.map((el) => el.split("").reverse().join(""));

console.log(Math.max(num1, num2));
