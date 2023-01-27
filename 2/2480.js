const input = require("fs")
  .readFileSync("../input/2480.txt")
  .toString()
  .split("\n");

const [A, B, C] = input[0].split(" ");
let price = 0;
if (A === B && A === C) {
  price = 10000 + A * 1000;
} else if (A === B || A === C) {
  price = 1000 + A * 100;
} else if (B === C) {
  price = 1000 + B * 100;
} else {
  price = Math.max(A, B, C) * 100;
}

console.log(price);
