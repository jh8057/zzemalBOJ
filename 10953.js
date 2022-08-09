let fs = require("fs");
let input = fs.readFileSync("./input/10953.txt").toString().trim().split("\n");
// const LENGTH = parseInt(input[0]);
for (let i = 1; i < input.length; i++) {
  // console.log("i", i);
  let arr = input[i].split(",");
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);
  console.log(A + B);
}
