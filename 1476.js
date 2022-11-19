let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/1476.txt").toString();

let [E, S, M] = input.split(" ").map(Number);

let target = 1;
while (true) {
  if (
    (target - E) % 15 === 0 &&
    (target - S) % 28 === 0 &&
    (target - M) % 19 === 0
  ) {
    console.log(target);
    return;
  }
  target++;
}

console.log(target);
