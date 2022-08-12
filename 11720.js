// let start = new Date();

let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/11720.txt").toString().trim().split("\n");

let inputarr = input[1].split("");

let result = inputarr.reduce((acc, cur) => {
  return acc + parseInt(cur);
}, 0);
console.log(result);

// let end = new Date();
// console.log(end - start);
