const inputs = require("fs")
  .readFileSync("../input/1920.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs[0]);
const A = inputs[1].split(" ").map((el) => Number(el));
const M = Number(inputs[2]);
const B = inputs[3].split(" ").map((el) => Number(el));

A.sort((a, b) => a - b);

const binary = (target, left, right) => {
  if (left > right) {
    return 0;
  }

  let mid = Math.floor((left + right) / 2);

  if (target === A[mid]) {
    return 1;
  } else if (target < A[mid]) {
    return binary(target, left, mid - 1);
  } else {
    return binary(target, mid + 1, right);
  }
};

const result = B.map((v) => binary(v, 0, N - 1));
console.log(result.join("\n"));
