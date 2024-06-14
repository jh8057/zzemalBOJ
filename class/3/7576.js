const inputs = require("fs")
  .readFileSync("../../input/7576.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

let arr = inputs.map((el) => el.split(" ").map((el) => +el));
let day = 0;

while (true) {
  let isChange = false;
  let isDone = true;

  let visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => false)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[i][j] > 0 && !visited[i][j]) {
        visited[i][j] = true;
        for (let k = 0; k < 4; k++) {
          let dx = [0, 1, 0, -1];
          let dy = [1, 0, -1, 0];

          let ny = dy[k] + i;
          let nx = dx[k] + j;
          if (arr[ny]?.[nx] === 0) {
            arr[ny][nx] = 1;
            isChange = true;
            visited[ny][nx] = true;
          }
        }
      } else if (arr[i][j] === 0) {
        isDone = false;
      }
    }
  }

  if (isDone) {
    console.log(day);
    return;
  }
  if (!isChange) {
    console.log(-1);
    return;
  }
  day++;
}
