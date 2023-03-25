const input = require("fs")
  .readFileSync("../input/10815.txt")
  .toString()
  .trim()
  .split("\n");

const [N, arr1, M, arr2] = input;

const have = new Set(arr1.split(" "));
const target = arr2.split(" ");

let result = [];
for (let i = 0; i < target.length; i++) {
  let card = target[i];
  if (have.has(card)) result.push(1);
  else result.push(0);
}
console.log(result.join(" "));

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const [N, M] = [+input[0], +input[2]];
// const [hasCards, cards] = [
//   new Set(input[1].split(" ").map(Number)),
//   input[3].split(" ").map(Number),
// ];

// let answer = "";
// for (let i = 0; i < M; i++) {
//   if (hasCards.has(cards[i])) answer += 1 + " ";
//   else answer += 0 + " ";
// }

// console.log(answer);
