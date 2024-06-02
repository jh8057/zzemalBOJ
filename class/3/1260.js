const inputs = require("fs")
  .readFileSync("../../input/1260.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = inputs.shift().split(" ");

let visited = [];

//graph
let graph = {};
inputs.forEach((node) => {
  let [start, end] = node.split(" ");
  if (graph[start]) {
    graph[start].push(end);
  } else {
    graph[start] = [end];
  }

  if (graph[end]) {
    graph[end].push(start);
  } else {
    graph[end] = [start];
  }
});

//dfs
for (let key in graph) {
  graph[key] = graph[key].sort((a, b) => b - a);
}

visited = new Array(Number(N) + 1).fill(false);
let stack = [];
let dfsResult = [];
visited[V] = true;
dfsResult.push(V);
graph[V]?.forEach((el) => {
  stack.push(el);
});

while (stack.length) {
  let next = stack.pop();

  if (!visited[next]) {
    visited[next] = true;
    dfsResult.push(next);
    graph[next].forEach((el) => {
      stack.push(el);
    });
  }
}

//bfs
for (let key in graph) {
  graph[key] = graph[key].sort((a, b) => a - b);
}

visited = new Array(Number(N) + 1).fill(false);
let queue = [];
let bfsResult = [];
visited[V] = true;
bfsResult.push(V);
graph[V]?.forEach((el) => {
  queue.push(el);
});

while (queue.length) {
  let next = queue.shift();

  if (!visited[next]) {
    visited[next] = true;
    bfsResult.push(next);
    graph[next].forEach((el) => {
      queue.push(el);
    });
  }
}
const result = dfsResult.join(" ") + "\n" + bfsResult.join(" ");
console.log(result);
