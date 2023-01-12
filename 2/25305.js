// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require("fs")
  .readFileSync("../input/25305.txt")
  .toString()
  .trim()
  .split("\n");

const [N, k] = input[0].split(" ").map((el) => Number(el));
const studentScore = input[1].split(" ").map((el) => Number(el));

studentScore.sort((a, b) => b - a);
console.log(studentScore[k - 1]);
