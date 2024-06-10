const inputs = require("fs")
  .readFileSync("../../input/1012.txt")
  .toString()
  .trim()
  .split("\n");

const N = +inputs.shift();
let answer = [];

// 케이스 갯수
for (let i = 0; i < N; i++) {
  let cnt = 0;
  let [M, N, K] = inputs
    .shift()
    .split(" ")
    .map((el) => +el);
  let arr = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );

  // 케이스별 배추 위치 , graph만들기
  for (let j = 0; j < K; j++) {
    let [x, y] = inputs
      .shift()
      .split(" ")
      .map((el) => +el);

    arr[y][x] = true;
  }

  // 배추 뭉친 부분 검사
  for (let a = 0; a < N; a++) {
    for (let b = 0; b < M; b++) {
      if (arr[a][b]) {
        cnt++;
        let queue = [[a, b]];
        while (queue.length) {
          let [na, nb] = queue.pop();

          // 도착한 지점 삭제
          arr[na][nb] = false;

          // 4뱡향으로 확인
          let dx = [0, 1, 0, -1];
          let dy = [1, 0, -1, 0];

          for (let c = 0; c < 4; c++) {
            let ny = na + dy[c];
            let nx = nb + dx[c];

            if (arr[ny]?.[nx]) {
              queue.push([ny, nx]);
            }
          }
        }
      }
    }
  }

  answer.push(cnt);
}

console.log(answer.join("\n"));
