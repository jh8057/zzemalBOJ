let [N, ...arr] = require("fs")
  .readFileSync("../input/11651.txt")
  .toString()
  .trim()
  .split("\n");

arr = arr.map((ele) => {
  return ele.split(" ").map((el) => Number(el));
});

arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let result = arr.map((el) => el.join(" ")).join("\n");
console.log(result);
