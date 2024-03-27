const inputs = require("fs")
  .readFileSync("../input/1753.txt")
  .toString()
  .trim()
  .split("\n");

const [V, E] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

const K = Number(inputs.shift());

const graph = {};
for (let i = 0; i < E; i++) {
  const [start, end, dist] = inputs[i].split(" ").map((el) => +el);

  if (graph[start]) {
    graph[start].push([end, dist]);
  } else {
    graph[start] = [[end, dist]];
  }
}

let visited = new Array(V + 1).fill(Infinity);
let queue = [];
queue.push([1, 0]);
graph[K].forEach((el) => {
  queue.push(el);
});

while (queue.length) {
  let [next, dist] = queue.shift().map((el) => +el);
  if (visited[next] !== Infinity) continue;
  visited[next] = dist;

  graph[next]?.forEach((el) => {
    queue.push([el[0], el[1] + dist]);
  });
}

visited.shift();
visited = visited.map((el) => {
  if (el === Infinity) {
    return "INF";
  }
  return el;
});
console.log(visited.join("\n"));
