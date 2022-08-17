let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = parseInt(fs.readFileSync("./input/2741.txt").toString());

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}

//..
