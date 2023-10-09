const [A, B, V] = require("fs")
  .readFileSync("../input/2869.txt")
  .toString()
  .trim()
  .split(" ");

// 4.25일은 5일이 걸리는 것이기 떄문에 올림
const day = Math.ceil((V - B) / (A - B));
console.log(day);
