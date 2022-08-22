let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/2741.txt").toString();
let answer = "";
for (let i = 1; i <= input; i++) {
  answer += "*".repeat(i) + "\n";
}

console.log(answer);

//..
