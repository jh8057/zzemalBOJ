const inputs = require("fs")
  .readFileSync("../../input/9663.txt")
  .toString()
  .trim();

const N = Number(inputs);
console.log(N);

let answer = 0;

const checkIsAble = (i, j, arr) => {
  for (let k = 0; k < arr.length; k++) {
    const [x, y] = arr[k];
    if (x === i || y === j || Math.abs(x - i) === Math.abs(y - j)) {
      return false;
    }
  }
  return true;
};

const dfs = (cnt, arr) => {
  if (cnt === N) {
    answer++;
    return;
  }

  const row = cnt; // 각 행에 하나의 퀸을 놓는 방식

  for (let col = 0; col < N; col++) {
    if (checkIsAble(row, col, arr)) {
      arr.push([row, col]);
      dfs(cnt + 1, arr);
      arr.pop(); // 백트래킹을 위해 퀸을 제거
    }
  }
};

dfs(0, []);

console.log(answer);

//

const solution2 = () => {
  const inputs = require("fs")
    .readFileSync("../../input/9663.txt")
    .toString()
    .trim();

  const N = Number(inputs);
  let answer = 0;

  const cols = Array(N).fill(false);
  const diag1 = Array(2 * N - 1).fill(false);
  const diag2 = Array(2 * N - 1).fill(false);

  const dfs = (row) => {
    if (row === N) {
      answer++;
      return;
    }

    for (let col = 0; col < N; col++) {
      if (cols[col] || diag1[row + col] || diag2[row - col + N - 1]) continue;

      cols[col] = diag1[row + col] = diag2[row - col + N - 1] = true;
      dfs(row + 1);
      cols[col] = diag1[row + col] = diag2[row - col + N - 1] = false;
    }
  };

  dfs(0);
  console.log(answer);
};
