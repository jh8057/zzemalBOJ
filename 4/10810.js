const input = require("fs")
  .readFileSync("../input/10810.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);

const arr = new Array(N).fill("0");
for (let i = 1; i <= M; i++) {
  let [start, end, num] = input[i].split(" ");
  for (let j = start - 1; j < end; j++) {
    arr[j] = num;
  }
}

console.log(arr.join(" "));
