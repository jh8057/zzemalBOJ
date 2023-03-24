const input = require("fs")
  .readFileSync("../input/1546.txt")
  .toString()
  .split("\n");

const [N, arr] = input;
const scores = arr.split(" ").map((el) => Number(el));
const max = Math.max(...scores);
let answer = 0;
for (let i = 0; i < N; i++) {
  answer += (scores[i] / max) * 100;
}

console.log(parseFloat(answer / N));
