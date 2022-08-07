let fs = require("fs");
let input = fs.readFileSync("./input/10951.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  console.log("i", i);
  let arr = input[i].split(" ");
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);
  console.log(A + B);
}
