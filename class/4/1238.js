const inputs = require("fs")
  .readFileSync("../../input/1238.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, X] = inputs.shift().split(" ").map(Number);

const adj = Array.from({ length: N }, () => []);
const revAdj = Array.from({ length: N }, () => []);

// 그래프 생성 (adj는 원래 그래프, revAdj는 역방향 그래프)
for (let i = 0; i < M; i++) {
  const [start, end, dist] = inputs[i].split(" ").map(Number);
  adj[start - 1].push([end - 1, dist]);
  revAdj[end - 1].push([start - 1, dist]);
}

// 다익스트라 알고리즘
const dijkstra = (graph, startNode) => {
  const distances = Array(N).fill(Infinity);
  distances[startNode] = 0;
  const pq = new MinHeap();
  pq.push([startNode, 0]);

  while (!pq.isEmpty()) {
    const [currentNode, currentDist] = pq.pop();

    if (currentDist > distances[currentNode]) continue;

    for (const [neighbor, weight] of graph[currentNode]) {
      const distance = currentDist + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        pq.push([neighbor, distance]);
      }
    }
  }

  return distances;
};

// 최소 힙 구현 (재사용)
class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return top;
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;

      if (
        leftChildIndex < length &&
        this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index) break;

      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      index = smallestIndex;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// X번 마을에서 모든 마을로 가는 최단 거리
const toX = dijkstra(revAdj, X - 1);

// 모든 마을에서 X번 마을로 가는 최단 거리
const fromX = dijkstra(adj, X - 1);

// 각 마을에서 X번 마을까지 왕복하는 데 걸리는 시간 중 최대값 계산
let maxTime = 0;
for (let i = 0; i < N; i++) {
  maxTime = Math.max(maxTime, fromX[i] + toX[i]);
}

console.log(maxTime);

/////////// 플로이드
/**
 * // 초기 거리 배열 설정
const INF = 1e9;
let dist = Array.from({ length: N }, () => Array(N).fill(INF));

// 자기 자신으로 가는 거리는 0
for (let i = 0; i < N; i++) {
  dist[i][i] = 0;
}

// 간선 정보 입력
for (let i = 0; i < M; i++) {
  const [start, end, cost] = inputs[i].split(" ").map(Number);
  // 단방향 그래프
  dist[start - 1][end - 1] = Math.min(dist[start - 1][end - 1], cost);
}

// Floyd-Warshall 알고리즘 수행
for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j]) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

// X번 마을(인덱스 X-1)로 가는 최단 거리와 돌아오는 최단 거리 계산
let maxTime = 0;

for (let i = 0; i < N; i++) {
  if (i === X - 1) continue;
  // i에서 X로 가는 거리와 X에서 i로 돌아오는 거리 합
  const roundTrip = dist[i][X - 1] + dist[X - 1][i];
  if (roundTrip < INF) {
    // 도달 가능한 경우에만
    maxTime = Math.max(maxTime, roundTrip);
  }
}

console.log(maxTime);

 */
