const input = require("fs")
  .readFileSync("../input/11725.txt")
  .toString()
  .split("\n");

const N = +input.shift();
let vertex = new Map();
let parent = new Array(N + 1).fill(0);

for (let i = 0; i < input.length; i++) {
  let node = input[i]
    .split(" ")
    .map((el) => +el)
    .sort((a, b) => a - b);

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

let queue = [1];

while (queue.length) {
  let target = queue.pop();
  let next = vertex.get(target);
  next.forEach((el) => {
    if (!parent[el] && el !== 1) {
      parent[el] = target;
      queue.push(el);
    }
  });
}

console.log(parent.slice(2).join("\n"));
