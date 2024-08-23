const inputs = require("fs")
  .readFileSync("../../input/1991.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs.shift());

const map = new Map();

for (let i = 0; i < N; i++) {
  let [root, left, right] = inputs[i].split(" ");

  map.set(root, { left, right });
}

const traverse = (type, node, answer = []) => {
  if (node === ".") return answer;

  const { left, right } = map.get(node);

  if (type === "pre") answer.push(node);
  traverse(type, left, answer);
  if (type === "in") answer.push(node);
  traverse(type, right, answer);
  if (type === "post") answer.push(node);

  return answer;
};

console.log(traverse("pre", "A").join(""));
console.log(traverse("in", "A").join(""));
console.log(traverse("post", "A").join(""));
