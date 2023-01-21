let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("../input/2741.txt").toString();
let answer = "";
for (let i = 1; i <= input; i++) {
  if (i == input) {
    answer += "* ".repeat(i) + "\n";
  } else {
    answer += " ".repeat(input - i) + "* ".repeat(i) + "\n";
  }
}
console.log(answer);
