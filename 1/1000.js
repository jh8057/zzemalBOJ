let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("../input/1924.txt").toString().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a + b);
