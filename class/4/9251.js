const inputs = require("fs")
  .readFileSync("../../input/9251.txt")
  .toString()
  .trim()
  .split("\n");

const [arr1, arr2] = inputs;
const L1 = arr1.length;
const L2 = arr2.length;

let maxLength = 0;

const queue = [];

const checkExist = (text, startIndex = 0) => {
  for (let i = startIndex; i < L2; i++) {
    if (text === arr2[i]) {
      return String(i);
    }
  }
  return false;
};

for (let i = 0; i < L1; i++) {
  let target = arr1[i];
  // check queue
  for (let j = 0; j < queue.length; j++) {
    const [text, index] = queue[j];
    if (checkExist(target, index)) {
      const lastIndex = Number(checkExist(target, index));
      if (lastIndex === L2 - 1) {
        maxLength = Math.max(maxLength, text.length + 1);
      } else {
        queue[j] = [text + target, lastIndex];
      }
    }
  }

  if (checkExist(target)) {
    const lastIndex = Number(checkExist(target));
    if (lastIndex === L2 - 1) {
      maxLength = Math.max(maxLength, 1);
    } else {
      queue.push([target, lastIndex]);
    }
  }
}

const max = Math.max(...queue.map((el) => el[0].length), maxLength);
console.log(max);
