let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = Number(fs.readFileSync("../input/2741.txt").toString());
let answer = "";
let total = 2 * input - 1;
if (input === 1) {
  console.log("*");
} else {
  answer += "*".repeat(total) + "\n";
  for (let i = 1; i < input; i++) {
    answer += " ".repeat(i) + "*".repeat(2 * (input - i) - 1) + "\n";
  }
  for (let i = input - 2; 0 < i; i--) {
    answer += " ".repeat(i) + "*".repeat(2 * (input - i) - 1) + "\n";
  }
  answer += "*".repeat(total);
  console.log(answer);
}
