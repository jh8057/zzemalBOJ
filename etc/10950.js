let fs = require("fs");
let input = fs.readFileSync("../input/10950.txt").toString().split("\n");
let len = parseInt(input[0]);

for (let i = 1; i <= len; i++) {
  let arr = input[i].split(" ");
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);
  console.log(A + B);
}
