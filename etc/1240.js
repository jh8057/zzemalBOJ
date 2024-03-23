const inputs = require("fs")
  .readFileSync("../input/1240.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

// graph
const graph = new Map();
for (let i = 0; i < inputs.length - M; i++) {
  const [x, y, distance] = inputs[i].split(" ").map((el) => +el);

  if (!graph.has(x)) {
    graph.set(x, []);
  }
  if (!graph.has(y)) {
    graph.set(y, []);
  }

  graph.get(x).push([y, distance]);
  graph.get(y).push([x, distance]);
}
// console.log("graph", graph);

/** dfs */
// let distance = [];
// let visited = [];

// const dfs = (x, dist) => {
//   if (visited[x]) return;
//   visited[x] = true;
//   distance[x] = dist;

//   graph.get(x).forEach((node) => {
//     const [y, nextDist] = node;
//     dfs(y, nextDist + dist);
//   });
// };

// let answer = [];
// for (let i = 0; i < M; i++) {
//   distance = new Array(N + 1).fill(0);
//   visited = new Array(N + 1).fill(false);

//   const [x, y] = inputs[N - 1 + i].split(" ").map((el) => +el);
//   dfs(x, 0);
//   answer.push(distance[y]);
// }
// console.log("answer", answer);

/** bfs */
const distance = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }, () => -1)
);
const bfs = (start, end) => {
  if (start === end) return 0;
  if (distance[start][end] !== -1) return distance[start][end];

  const visited = new Array(N + 1).fill(false);
  const queue = [];
  queue.push([start, 0]);
  visited[start] = true;

  while (queue.length) {
    const [node, dist] = queue.shift();
    if (node === end) {
      distance[start][end] = dist;
      return dist;
    }

    for (const [nextNode, nextDist] of graph.get(node)) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push([nextNode, dist + nextDist]);
      }
    }
  }
};

let answer = [];
for (let i = 0; i < M; i++) {
  const [x, y] = inputs[N - 1 + i].split(" ").map((el) => +el);
  answer.push(bfs(x, y));
}
console.log(answer.join("\n"));
