const inputs = require("fs")
  .readFileSync("../../input/11724.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

//graph만들기
let graph = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  let [x, y] = inputs[i].split(" ").map((el) => +el);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Array(N + 1).fill(false);
let cnt = 0;
for (let i = 1; i <= N; i++) {
  //방문 안한 노드 bfs 시작
  if (!visited[i]) {
    visited[i] = true;
    cnt++;

    //bfs : 연결된 지점 전부 visited처리
    let queue = [i];
    while (queue.length) {
      let next = queue.pop();
      for (let nv of graph[next]) {
        if (!visited[nv]) {
          visited[nv] = true;
          queue.push(nv);
        }
      }
    }
  }
}

console.log(cnt);
