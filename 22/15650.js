const inputs = require("fs")
  .readFileSync("../input/15650.txt")
  .toString()
  .trim()
  .split(" ");

const N = Number(inputs[0]);
const M = Number(inputs[1]);

let final = [];
const printLoop = (arr = [], answer = [], cnt) => {
  if (cnt == 0) {
    let result = answer.sort((a, b) => a - b).join(" ");
    if (!final.includes(result)) final.push(result);
    return;
  }

  let next = [];
  let nextAnswer = [];
  for (let i = 0; i < arr.length; i++) {
    next = [...arr.slice(0, i), ...arr.slice(i + 1)];
    nextAnswer = [...answer, arr[i]];
    printLoop(next, nextAnswer, cnt - 1);
  }
};

let initArray = Array.from({ length: N }, (_, i) => i + 1);
printLoop(initArray, [], M);
console.log(final.join("\n"));
