// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const input = require("fs")
  .readFileSync("../input/2587.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => Number(el));

let sortedArr = input.sort((a, b) => a - b);

let avg = sortedArr.reduce((pre, cur) => pre + cur, 0);
console.log(Math.floor(avg / sortedArr.length));

let mid = Math.floor(sortedArr.length / 2);
console.log(sortedArr[mid]);
