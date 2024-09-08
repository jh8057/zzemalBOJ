const inputs = require("fs")
  .readFileSync("../../input/1967.txt")
  .toString()
  .trim()
  .split("\n");

// 0.basic setting
const N = Number(inputs.shift());
const arr = inputs.map((el) => el.split(" ").map((el) => Number(el)));

// 1.graph
const graph = {};
arr.forEach((node) => {
  const [start, end, dist] = node;
  if (!graph[start]) graph[start] = [];
  if (!graph[end]) graph[end] = [];
  graph[start].push([end, dist]);
  graph[end].push([start, dist]);
});

//dfs
const dfs = (node) => {
  const stack = [[node, 0]];
  const visited = new Array(N + 1).fill(0);
  visited[node] = true;

  let farNode = node;
  let maxDist = 0;

  while (stack.length) {
    let [next, dist] = stack.pop();

    if (dist > maxDist) {
      maxDist = dist;
      farNode = next;
    }

    graph[next]?.forEach((el) => {
      let [nextNode, nextDist] = el;
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        stack.push([nextNode, dist + nextDist]);
      }
    });
  }

  return { farNode, maxDist };
};

//2. dfs 2번실행
const firstDFS = dfs(1);
const secondDFS = dfs(firstDFS.farNode);
console.log(secondDFS.maxDist);
