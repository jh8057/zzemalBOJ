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

let startPoint = [];
let endPoint = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] > 0) {
      endPoint.push([i, j]);
    }
  }
}

const growTomato = (i, j) => {
  for (let k = 0; k < 4; k++) {
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];

    let ny = dy[k] + i;
    let nx = dx[k] + j;
    if (arr[ny]?.[nx] === 0) {
      arr[ny][nx] = arr[i][j] + 1;
      startPoint.push([ny, nx]);
    }
  }
};

//bfs
let day = -1;
while (startPoint.length || endPoint.length) {
  if (!endPoint.length) {
    endPoint = startPoint.reverse();
    startPoint = [];
  }

  let [i, j] = endPoint.pop();
  if (arr[i][j] > day) {
    day = arr[i][j] - 1;
  }

  growTomato(i, j);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 0) {
      console.log(-1);
      return;
    }
  }
}

console.log(day);
