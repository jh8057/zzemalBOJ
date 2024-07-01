/** * */

const inputs = require("fs")
  .readFileSync("../../input/15663.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = inputs
  .shift()
  .split(" ")
  .map((el) => +el);

let arr = inputs[0]
  .split(" ")
  .map((el) => +el)
  .sort((a, b) => a - b);

let visited = new Array(N).fill(false);
let result = [];
let answer = "";

const dfs = (depth) => {
  if (depth === M) {
    answer += result.join(" ") + "\n";
    return;
  }
  let previous = -1;
  for (let i = 0; i < N; i++) {
    if (visited[i] || previous === arr[i]) continue;
    visited[i] = true;
    result.push(arr[i]);
    previous = arr[i];

    dfs(depth + 1);

    visited[i] = false;
    result.pop();
  }
};
dfs(0);
console.log(answer.trim());
