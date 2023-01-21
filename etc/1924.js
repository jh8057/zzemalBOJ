const fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const input = fs.readFileSync("../input/1924.txt").toString().split(" ");

const month = parseInt(input[0]);
const day = parseInt(input[1]);

const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let cntDay = day;
for (let i = 0; i < month - 1; i++) {
  cntDay += monthDay[i];
}

const index = cntDay % 7;
// console.log(cntDay);
// console.log(index);
console.log(date[index]);

//1
console.log(
  ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][
    new Date(
      "2007 " + require("fs").readFileSync("/dev/stdin").toString()
    ).getDay()
  ]
);
