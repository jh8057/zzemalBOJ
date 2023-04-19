const input = require("fs")
  .readFileSync("../input/2738.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input
  .shift()
  .split(" ")
  .map((el) => +el);

let result = [];
for (let i = 0; i < N; i++) {
  let target = input[i].split(" ");
  let target2 = input[i + N] ? input[i + N].split(" ") : [];

  let temp = target
    .map((el, index) => Number(el) + Number(target2[index]))
    .join(" ");
  result.push(temp);
}

console.log(result.join("\n").trim());
