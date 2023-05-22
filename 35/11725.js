const input = require("fs")
  .readFileSync("../input/11725.txt")
  .toString()
  .split("\n");

const N = input.shift();

let vertex = {};

for (let i = 0; i < input.length; i++) {
  let node = input[i]
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => a - b);
  console.log("node", node);

  if (vertex[node[0]]) {
    vertex[node[0]].push(node[1]);
  } else {
    vertex[node[0]] = [node[1]];
  }

  if (vertex[node[1]]) {
    vertex[node[1]].push(node[0]);
  } else {
    vertex[node[1]] = [node[0]];
  }
}

console.log("ver", vertex);
