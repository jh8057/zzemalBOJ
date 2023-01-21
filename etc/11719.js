let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("../input/11719.txt").toString().split("\n");
// const LENGTH = parseInt(input[0]);
for (let i = 0; i < input.length; i++) {
  console.log("i", input[i]);
}
