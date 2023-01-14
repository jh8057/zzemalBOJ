const [A, B, C] = require("fs")
  .readFileSync("../input/1476.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
