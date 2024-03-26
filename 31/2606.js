// runtime error
const inputs = require("fs")
  .readFileSync("../input/2606.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs.shift());
const M = Number(inputs.shift());

//make graph
const graph = new Map();

for (let i = 0; i < M; i++) {
  const [start, end] = inputs[i].split(" ").map((el) => +el);
  if (graph.has(start)) {
    graph.get(start).push(end);
  } else {
    graph.set(start, [end]);
  }

  if (graph.has(end)) {
    graph.get(end).push(start);
  } else {
    graph.set(end, [start]);
  }
}

//bfs
let queue = [];
let visited = [];
queue.push(1);
while (queue.length) {
  let target = queue.shift();
  if (visited.includes(target)) continue;
  visited.push(target);
  graph.get(target).forEach((el) => {
    queue.push(el);
  });
}
let result = visited.length - 1;
console.log(result);

//
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const qty = Number(input.shift());
// const pair = Number(input.shift());
// const computers = input.map((v) => v.split(' ').map(Number));

// let answer = 0;
// let visited = Array(qty + 1).fill(false);
// let graph = Array.from(Array(qty + 1)).map(() => []);

// computers.map(([from, to]) => {
//   graph[from].push(to);
//   graph[to].push(from);
// });

// const bfs = (start) => {
//   let queue = [start];
//   while (queue.length) {
//     const node = queue.shift();
//     if (!visited[node]) {
//       visited[node] = true;
//       answer++;
//       queue.push(...graph[node]);
//     }
//   }
// };

// bfs(1);
// console.log(answer - 1);
