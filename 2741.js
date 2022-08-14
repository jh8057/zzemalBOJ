let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/2741.txt").toString();
const LENGTH = parseInt(input[0]);
console.log(1);
for (let i = 2; i < LENGTH + 1; i++) {
  console.log(i);
}
