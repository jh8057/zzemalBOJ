const input = require("fs")
  .readFileSync("../input/2738.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let result = [];
for (let i = 0; i < N; i++) {
  let target = input[i].split(" ");
  let target2 = input[i + N] ? input[i + N].split(" ") : [];

  let temp = target
    .map((el, index) => Number(el) + Number(target2[index]))
    .join(" ");
  result.push(temp);
}

console.log(result.join("\n").trim());

// const [[row, col], ...inputs] = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((line) => line.split(" ").map(Number));

// const A = inputs.slice(0, row);
// const B = inputs.slice(row);

// for (let r = 0; r < row; r++) {
//   for (let c = 0; c < col; c++) {
//     A[r][c] += B[r][c];
//   }
// }

// const sol = [];
// A.forEach((line) => sol.push(line.join(" ")));

// console.log(sol.join("\n"));
