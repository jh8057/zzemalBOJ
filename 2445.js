let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = Number(fs.readFileSync("./input/2741.txt").toString());
let answer = "";
for (let i = 1; i < input; i++) {
  answer += "*".repeat(i) + " ".repeat(2 * (input - i)) + "*".repeat(i) + "\n";
}
answer += "*".repeat(2 * input) + "\n";
for (let i = input - 1; 0 < i; i--) {
  answer += "*".repeat(i) + " ".repeat(2 * (input - i)) + "*".repeat(i) + "\n";
}
console.log(answer);
