const inputs = require("fs")
  .readFileSync("../../input/1238.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, X] = inputs
  .shift()
  .split(" ")
  .map((el) => Number(el));

// 0. 그래프 그리기
const graph = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Infinity)
);

for (let i = 0; i < M; i++) {
  const [start, end, dist] = inputs[i].split(" ").map((el) => Number(el));
  graph[start - 1][end - 1] = dist;
}

// 1. 각 노드별 최단 거리 구하기
const dijkstra = (startNode) => {
  const queue = [[startNode, 0]];
  const visited = Array.from({ length: N + 1 }, () => Infinity);

  while (queue.length) {
    queue.sort((a, b) => a[1] - b[1]); // 최단거리 우선
    const [start, dist] = queue.shift();
    for (let i = 0; i < N; i++) {
      if (start !== i && graph[start][i] !== Infinity) {
        const newDist = graph[start][i] + dist;
        if (newDist < visited[i]) {
          visited[i] = Math.min(visited[i], newDist);
          queue.push([i, newDist]);
        }
      }
    }
  }

  return visited;
};

// 1.최적화를 위해  오는길 한번만 함수 실행
const toDist = dijkstra(X - 1);

// 2. 그 중 가장 오래된 친구 구하기
let result = [];
for (let i = 0; i < N; i++) {
  if (i !== X - 1) {
    const fromDist = dijkstra(i);
    result.push(fromDist[X - 1] + toDist[i]);
  }
}
console.log(Math.max(...result));
