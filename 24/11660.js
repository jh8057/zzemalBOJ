// const inputs = require("fs")
//   .readFileSync("../input/11660.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const [N, M] = inputs[0].split(" ").map((el) => +el);

// let arr = inputs.slice(1, N + 1).map((el) => el.split(" ").map((el) => +el));
// const target = inputs.slice(N + 1);

// arr.forEach((row, i) => {
//   row.forEach((el, j) => {
//     arr[i][j] = el + (arr[i][j - 1] || 0);
//   });
// });

// let answer = [];
// for (let i = 0; i < target.length; i++) {
//   let sum = 0;
//   const [x1, y1, x2, y2] = target[i].split(" ").map((el) => +el);
//   for (let j = y1; j <= y2; j++) {
//     sum += arr[j - 1][x2 - 1] - (arr[j - 1][x1 - 2] || 0);
//   }
//   answer.push(sum);
// }

// console.log(answer.join("\n"));

const [[N, M], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const table = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

input.slice(0, N).forEach((row, x) => {
  row.forEach((cell, y) => {
    table[x + 1][y + 1] = cell;
  });
});

for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= N; y++) {
    table[x][y] += table[x - 1][y] + table[x][y - 1] - table[x - 1][y - 1];
  }
}

const coords = input.slice(N);
const output = [];

coords.forEach(([x1, y1, x2, y2]) => {
  output.push(
    table[x2][y2] -
      table[x1 - 1][y2] -
      table[x2][y1 - 1] +
      table[x1 - 1][y1 - 1]
  );
});

console.log(output.join("\n"));
