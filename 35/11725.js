const input = require("fs")
  .readFileSync("../input/11725.txt")
  .toString()
  .split("\n");

const N = input.shift();

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
