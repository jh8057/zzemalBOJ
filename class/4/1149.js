const inputs = require("fs")
  .readFileSync("../../input/1149.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs.shift());
const arr = inputs.map((el) => el.split(" ").map(Number));

//초기값
let maxNum = Infinity;
let queue = [];
for (let i = 0; i < 3; i++) {
  queue.push([arr[0][i], i, 1]);
}

//dfs
while (queue.length) {
  const [sum, index, level] = queue.pop();
  if (level === N) {
    maxNum = Math.min(sum, maxNum);
    continue;
  }
  for (let i = 0; i < 3; i++) {
    if (i === index) continue;
    else {
      const next = sum + arr[level][i];
      queue.push([next, i, level + 1]);
    }
  }
}

console.log(maxNum);
