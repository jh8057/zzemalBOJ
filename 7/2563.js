const input = require("fs")
  .readFileSync("../input/2563.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

const arr = input.map((el) => el.split(" ").map((el) => +el));

let answer = N * 100;
while (arr.length) {
  let [x, y] = arr.pop().map((el) => +el);
  arr.forEach((el) => {
    let diffx = 10 - Math.abs(el[0] - x);
    let diffy = 10 - Math.abs(el[1] - y);
    if (diffx > 0 && diffy > 0) {
      answer -= diffx * diffy;
    }
  });
}

console.log(answer);

// const fs = require("fs");
// const [amount, ...papers] = fs
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");
// const whiteBoard = Array.from(Array(100), () => new Array(100).fill(false));
// let trues = 0;
// const length = 10;

// papers.forEach((e) => {
//   const [x, y] = e.split(" ").map((e) => +e);
//   for (let i = x; i < x + length; i++) {
//     for (let j = y; j < y + length; j++) {
//       whiteBoard[i][j] = true;
//     }
//   }
// });

// whiteBoard.forEach((e) => {
//   e.forEach((ee) => {
//     if (ee === true) trues++;
//   });
// });

// console.log(trues);
