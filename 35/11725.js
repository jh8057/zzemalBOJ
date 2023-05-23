const input = require("fs")
  .readFileSync("../input/11725.txt")
  .toString()
  .split("\n");

const N = input.shift();

let vertex = new Map();

for (let i = 0; i < input.length; i++) {
  let node = input[i]
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => a - b);
  console.log("node", node);

  if (vertex.get(node[0])) {
    vertex.get(node[0]).push(node[1]);
  } else {
    vertex.set(node[0], [node[1]]);
  }

  if (vertex.get(node[1])) {
    vertex.get(node[1]).push(node[0]);
  } else {
    vertex.set(node[1], [node[0]]);
  }
}

console.log("ver", vertex);

vertex.forEach((el) => {
  console.log("el", el);
});
