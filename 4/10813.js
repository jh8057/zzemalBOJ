const input = require("fs")
  .readFileSync("../input/10813.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const arr = new Array(N).fill().map((_, i) => {
  return i + 1;
});

for (let i = 1; i <= M; i++) {
  let [start, end] = input[i].split(" ");
  //   let temp = arr[start - 1];
  //   arr[start - 1] = arr[end - 1];
  //   arr[end - 1] = temp;

  [arr[start - 1], arr[end - 1]] = [arr[end - 1], arr[start - 1]];
}
console.log(arr.join(" "));
