let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = Number(fs.readFileSync("./input/2741.txt").toString());
const dp = new Array(input + 1).fill(0);

console.log(dp[input]);
//https://webruden.tistory.com/1035