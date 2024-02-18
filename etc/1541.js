const input = require("fs")
  .readFileSync("../input/1541.txt")
  .toString()
  .split("-");

let result = 0;
input.forEach((el, idx) => {
  let arr = el.split("+").map((el) => Number(el));
  if (idx === 0) {
    result += arr.reduce((acc, cur) => acc + cur, 0);
  } else {
    result -= arr.reduce((acc, cur) => acc + cur, 0);
  }
});

console.log(result);
