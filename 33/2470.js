const inputs = require("fs")
  .readFileSync("../input/2470.txt")
  .toString()
  .trim()
  .split("\n");

console.log("input", inputs);

const N = +inputs[0];
const arr = inputs[1].split(" ");

let startPoint = 0;
let endPoint = 0;
for (let i = 0; i < N; i++) {
  console.log(arr[i]);
}
