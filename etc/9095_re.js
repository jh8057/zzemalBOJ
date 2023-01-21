let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("../input/9095.txt").toString().split("\n");
let answer = 0;
let goal = 0;
let result = "";

function add(sum) {
  if (sum > goal) return;
  if (sum == goal) {
    answer++;
    return;
  }

  add(sum + 1);
  add(sum + 2);
  add(sum + 3);
}

for (let i = 1; i <= input[0]; i++) {
  answer = 0;
  goal = input[i];
  add(0);
  result += answer + "\n";
}

console.log(result.trim());
