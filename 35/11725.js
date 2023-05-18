const input = require("fs")
  .readFileSync("../input/11725.txt")
  .toString()
  .split("\n");

const N = input.shift();

let vertex = {};

for (let i = 0; i < input.length; i++) {
  let node = input[i].split(" ");
  console.log("node", node);
  for (let j = 1; j < N; j++) {
    if (node[0] == j) {
      vertex[node[0]] = node[1];
    }

    if (node[1] == j) {
      vertex[node[1]] = node[0];
    }
  }
}

console.log("ver", vertex);
