// 다익스트라
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
visited[1] = 0;

while (queue.length) {
  queue.sort((a, b) => a[1] - b[1]); // 길이가 짧은거 먼저 처리
  let [current, dist] = queue.shift();

  graph[current]?.forEach((el) => {
    const [next, nextDist] = el;
    const newDist = dist + nextDist;
    if (newDist < visited[next]) {
      visited[next] = newDist;
      queue.push([next, newDist]);
    }
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

/// min heap

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(node) {
    this.heap.push(node);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index][1] < this.heap[parentIndex][1]) {
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let index = 0;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let smallestIndex = index;
      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex][1] < this.heap[smallestIndex][1]
      ) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex !== index) {
        [this.heap[index], this.heap[smallestIndex]] = [
          this.heap[smallestIndex],
          this.heap[index],
        ];
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

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

const graph = Array.from({ length: V + 1 }, () => []);
for (let i = 0; i < E; i++) {
  const [start, end, dist] = inputs[i].split(" ").map(Number);
  graph[start].push([end, dist]);
}

const visited = new Array(V + 1).fill(Infinity);
visited[K] = 0;

const heap = new MinHeap();
heap.push([K, 0]);

while (!heap.isEmpty()) {
  const [current, dist] = heap.pop();
  if (dist > visited[current]) continue;
  for (const [next, nextDist] of graph[current]) {
    const newDist = dist + nextDist;
    if (newDist < visited[next]) {
      visited[next] = newDist;
      heap.push([next, newDist]);
    }
  }
}

const result = visited.slice(1).map((el) => (el === Infinity ? "INF" : el));
console.log(result.join("\n"));
