let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/2741.txt").toString();
let answer = "";
for (let i = 0; i < input; i++) {
  answer += i + 1 + "\n";
}

console.log(answer);

//..
