const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString();
const input = fs.readFileSync("../input/2741.txt").toString().trim();

function getNewNum(num) {
  const first = parseInt(num / 10);
  const second = num % 10;

  const sum = first + second;
  return parseInt(`${second}` + (sum % 10));
}

let cnt = 1;
let target = getNewNum(Number(input));
while (target != input) {
  cnt++;
  target = getNewNum(target);
}
console.log(cnt);

//slice(-1)
