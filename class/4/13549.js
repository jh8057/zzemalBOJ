const inputs = require("fs")
  .readFileSync("../../input/13549.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

const maxPosition = 100000;
const visited = new Array(maxPosition + 1).fill(-1);
const queue = [];

queue.push(N);
visited[N] = 0;

while (queue.length > 0) {
  const cur = queue.shift();

  if (cur === K) {
    console.log(visited[cur]);
    return;
  }

  const nextPositions = [cur * 2, cur + 1, cur - 1];

  for (let next of nextPositions) {
    if (next >= 0 && next <= maxPosition && visited[next] === -1) {
      if (next === cur * 2) {
        queue.unshift(next); // 순간이동은 우선적으로 탐색
        visited[next] = visited[cur]; // 순간이동은 시간이 증가하지 않음
      } else {
        queue.push(next);
        visited[next] = visited[cur] + 1; // 걷는 경우는 시간이 1 증가
      }
    }
  }
}
