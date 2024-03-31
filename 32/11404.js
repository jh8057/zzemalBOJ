//플로이드
const inputs = require("fs")
  .readFileSync("../input/11404.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const m = +inputs[1];

const graph = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity))
);
//make graph
for (let i = 0; i < m; i++) {
  let [start, end, cost] = inputs[2 + i].split(" ").map((el) => +el);
  graph[start - 1][end - 1] = Math.min(graph[start - 1][end - 1], cost);
}

//calculate
for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

let answer = graph
  .map((arr) => {
    return arr
      .map((el) => {
        if (el === Infinity) {
          return 0;
        }
        return el;
      })
      .join(" ");
  })
  .join("\n");

console.log(answer);
