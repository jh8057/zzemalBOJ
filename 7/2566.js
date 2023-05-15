const input = require("fs")
  .readFileSync("../input/2566.txt")
  .toString()
  .trim()
  .split("\n");

let max = -1;
let location = [0, 0];
let len = input[0].split(" ").length;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < len; j++) {
    let target = input[i].split(" ").map((el) => +el);
    if (target[j] > max) {
      max = target[j];
      location = [i + 1, j + 1];
    }
  }
}

console.log(max);
console.log(location[0], location[1]);
