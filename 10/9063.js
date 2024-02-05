const input = require("fs")
  .readFileSync("../input/9063.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

const x = input.map((el) => el.split(" ")[0]);
const y = input.map((el) => el.split(" ")[1]);

const x1 = Math.min(...x);
const y1 = Math.min(...y);
const x2 = Math.max(...x);
const y2 = Math.max(...y);

const result = (x2 - x1) * (y2 - y1);
console.log(result);
