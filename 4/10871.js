const input = require("fs")
  .readFileSync("../input/10871.txt")
  .toString()
  .split("\n");

const [N, X] = input[0].split(" ").map((el) => +el);
const A = input[1].split(" ").map((el) => +el);

let result = "";
for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result += A[i] + " ";
  }
}

console.log(result);
