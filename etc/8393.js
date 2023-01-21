let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = parseInt(fs.readFileSync("../input/8393.txt").toString());

console.log((input * (input + 1)) / 2);

//..
