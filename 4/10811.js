const input = require("fs")
  .readFileSync("../input/10813.txt")
  .toString()
  .split("\n");

const [N, M] = input[0].split(" ").map((el) => +el);
const arr = new Array(N).fill().map((_, i) => {
  return i + 1;
});

console.log(N, M, arr);
for (let i = 1; i <= M; i++) {
  let [start, end] = input[i].split(" ");
  let target = arr.slice(start - 1, end).reverse();

  arr.splice(start - 1, end - start + 1, ...target);
}
console.log(arr.join(" "));
