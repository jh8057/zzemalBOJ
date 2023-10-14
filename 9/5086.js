const inputs = require("fs")
  .readFileSync("../input/5086.txt")
  .toString()
  .trim()
  .split("\n");

inputs.pop();
const answer = [];
inputs.forEach((input) => {
  const [a, b] = input.split(" ");
  if (a % b === 0) answer.push("multiple");
  else if (b % a === 0) answer.push("factor");
  else answer.push("neither");
});

console.log(answer.join("\n"));
