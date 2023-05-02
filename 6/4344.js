const input = require("fs")
  .readFileSync("../input/4344.txt")
  .toString()
  .trim()
  .split("\n");

const C = input.shift();

for (let i = 0; i < C; i++) {
  let arr = input[i].slice().split(" ");
  let N = arr.shift();
  let avg =
    arr.reduce((prev, cur) => Number(prev) + Number(cur), 0) / arr.length;
  let count = arr.filter((student) => student > avg).length;

  console.log(((count / arr.length) * 100).toFixed(3) + "%");
}
