// const input = require("fs")
//   .readFileSync("../input/25206.txt")
//   .toString()
//   .split("\n")
//   .map((el) => el.split(" "));

// const gradeTable = {
//   "A+": 4.5,
//   A0: 4.0,
//   "B+": 3.5,
//   B0: 3.0,
//   "C+": 2.5,
//   C0: 2.0,
//   "D+": 1.5,
//   D0: 1.0,
//   F: 0.0,
// };
// let totalScore = input.reduce(
//   (prev, acc) => {
//     let [_, num, grade] = acc.split(" ");
//     if (grade === "P" || grade === "F") return prev;
//     return [prev[0] + num * gradeTable[grade], prev[1] + Number(num)];
//   },
//   [0, 0]
// );

// console.log(totalScore[1] === 0 ? 0 : totalScore[0] / totalScore[1]);

const table = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" "));
s = 0;
t = 0;
for (let [a, b, c] of input) {
  if (c == "P") continue;
  s += b * 1;
  t += b * table[c];
}
console.log(t / s);
