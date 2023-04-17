const input = require("fs")
  .readFileSync("../input/10812.txt")
  .toString()
  .split("\n");

let [N, M] = input.shift().split(" ");
console.log(N, M);
let basket = new Array(+N).fill(0).map((el, idx) => idx + 1);

console.log(basket);
console.log("input", input);

input.forEach((el) => {
  let [start, end, mid] = el.split(" ");
  let target = basket.slice(start - 1, mid - 1);
  let target2 = basket.slice(mid - 1, end);
  console.log(target, target2);
  console.log(basket.slice(0, 0));
});
