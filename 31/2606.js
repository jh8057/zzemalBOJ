const inputs = require("fs")
  .readFileSync("../input/2606.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs.shift());
const M = Number(inputs.shift());

console.log("N", N, M);

//make graph
const graph = new Map();

for (let i = 0; i < M; i++) {
  const [start, end] = inputs[i].split(" ").map((el) => +el);
  console.log("start", start, end);
}
