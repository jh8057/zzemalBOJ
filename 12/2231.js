const input = require("fs").readFileSync("../input/2231.txt").toString().trim();

let LEN = input.length;

let target = Number(input);
for (let i = target - 9 * LEN; i < target + 9 * LEN; i++) {
  let result = i;
  let arr = String(i).split("");
  arr.forEach((el) => (result += +el));
  if (result === target) {
    console.log(i);
    return;
  }
}

console.log(0);
