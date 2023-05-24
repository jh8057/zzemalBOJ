// 2차 수정
const input = require("fs").readFileSync(0).toString().trim().split("\n");

const inputSet = new Set(input.slice(1));
const arr = Array.from(inputSet);
arr.sort((a, b) => {
  if (a.length === b.length) return a > b ? 1 : -1;
  return a.length - b.length;
});

//가장 큰 차이는 join으로 한번에 묶어서 console.log 하는게 중요했다.
console.log(arr.join("\n"));

// 1차 제출
// let [N, ...arr] = require("fs")
//   .readFileSync("../input/1181.txt")
//   .toString()
//   .trim()
//   .split("\n");

// arr = [...new Set(arr)];
// console.log(arr);
// arr.sort((a, b) => {
//   if (a.length > b.length) return 1;
//   else if (a.length === b.length) return a > b ? 1 : -1;
//   else return -1;
// });

// arr.forEach((word) => console.log(word));
