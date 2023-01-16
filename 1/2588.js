let input = require("fs")
  .readFileSync("../input/2588.txt")
  .toString()
  .trim()
  .split("\n");

let A = input[0];
let B = input[1];

//뻘짓
let secondNumArr = B.split("")
  .map((el) => Number(el))
  .reverse();

let result = "";
for (let i = 0; i < secondNumArr.length; i++) {
  result += Number(A) * secondNumArr[i] + "\n";
}
result += Number(A) * Number(B);
console.log(result);

// console.log(Number(A) * Number(B[2]));
// console.log(Number(A) * Number(B[1]));
// console.log(Number(A) * Number(B[0]));
// console.log(Number(A) * Number(B));
