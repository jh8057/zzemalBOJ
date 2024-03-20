const inputs = require("fs")
  .readFileSync("../input/15650.txt")
  .toString()
  .trim()
  .split(" ");

console.log("input", inputs);

const [N, M] = inputs;

console.log("N", N, M);

const printLoop = (answer = [], cnt) => {
  if (cnt === 0) return answer;
  for (let i = 0; i < N; i++) {
    if (cnt === 1) {
      if (answer.indexOf(i) < 0) {
        answer.push(i);
      }
    }
  }
  return printLoop(answer, cnt - 1);
};

const answer = printLoop([], M);
console.log(answer);
