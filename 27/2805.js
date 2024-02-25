const inputs = require("fs")
  .readFileSync("../input/2805.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = inputs[0].split(" ").map((el) => Number(el));
const tree = inputs[1].split(" ").map((el) => Number(el));

const sumTreeHeight = (height) => {
  return tree.reduce((prev, cur) => {
    let diff = cur < height ? 0 : cur - height;
    return prev + diff;
  }, 0);
};

/**
 * @param {*} target 나무 높이
 * @param {*} left 0
 * @param {*} right 나무 최대 높이
 * @returns
 */
const binary = (left, right) => {
  if (left > right) {
    return right;
  }
  let mid = Math.floor((left + right) / 2);

  // 찾는조건
  let target = sumTreeHeight(mid);
  if (target === M) {
    return mid;
  } else if (target < M) {
    return binary(left, mid - 1);
  } else {
    return binary(mid + 1, right);
  }
};

let max = Math.max(...tree);
console.log(binary(0, max));
