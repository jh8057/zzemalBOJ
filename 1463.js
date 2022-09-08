let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/2741.txt").toString();

let cnt = 0;

while (input !== 1) {
  if (input % 3 === 0) {
    input = input / 3;
  } else if (input % 3 === 1) {
    input = input - 1;
  } else if (input % 2 === 0) {
    input = input / 2;
  } else {
    input = input - 1;
  }
  cnt++;
  console.log(cnt, input);
}

console.log(cnt);
