let fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync("./input/10818.txt").toString().trim().split("\n");

let arr = input[1].split(" ");
console.log(arr);
console.log(Math.min(...arr), Math.max(...arr));

//구조 분해 할당 ...나머지 선언
