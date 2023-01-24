//2차
const input = require("fs")
  .readFileSync("../input/18870.txt")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let arr = input[1].split(" ");
let sortedArr = [...new Set(arr)].sort((a, b) => a - b);

let obj = {};
sortedArr.forEach((el, index) => (obj[el] = index));
let result = "";
for (let i = 0; i < N; i++) {
  result += obj[arr[i]] + " ";
}
console.log(result);
// 1차
// const input = require("fs")
//   .readFileSync("../input/18870.txt")
//   .toString()
//   .trim()
//   .split("\n");

// let N = parseInt(input[0]);
// let arr = input[1].split(" ");
// let sortedArr = [...new Set(arr)].sort((a, b) => a - b);

// let result = "";
// for (let i = 0; i < N; i++) {
//   result += sortedArr.indexOf(arr[i]) + " ";
// }
// console.log(result.trimEnd());

//other - search
// const getLowerBound = (arr, target) => {
//   let le = 0,
//     ri = arr.length;
//   while (le < ri) {
//     const mid = Math.floor((le + ri) / 2);
//     if (target <= arr[mid]) {
//       ri = mid;
//     } else {
//       le = mid + 1;
//     }
//   }
//   return ri;
// };

// const [n, x] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const N = Number(n);
// const inputs = x.split(" ").map(Number);
// const s = new Set(inputs);
// const arr = Array.from(s).sort((a, b) => a - b);

// console.log(inputs.map((x) => getLowerBound(arr, x)).join(" "));
