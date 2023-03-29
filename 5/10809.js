// const input = require("fs")
//   .readFileSync("../input/10809.txt")
//   .toString()
//   .trim();

// let answer = new Array(26).fill(-1);
// for (let i = 0; i < input.length; i++) {
//   let alpha = input[i].charCodeAt(0);
//   let index = alpha - 97;

//   answer[index] = answer[index] > 0 ? answer[index] : i;
// }

// console.log(answer.join(" "));

const input = require("fs").readFileSync("/dev/stdin").toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));
