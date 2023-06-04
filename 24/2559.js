const input = require("fs")
  .readFileSync("../input/2559.txt")
  .toString()
  .split("\n");

console.log(input);

const [K, N] = input.shift().split(" ");

console.log(K, N);

const arr = input.split(" ").map((el) => +el);
const sum = arr.map(el, (i) => {
  return el + (arr[i - 1] || 0);
});
