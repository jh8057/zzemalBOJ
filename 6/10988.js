const input = require("fs")
  .readFileSync("../input/10988.txt")
  .toString()
  .trim();

console.log(input);

const LEN = input.length;
const MID = Math.floor(LEN / 2);

console.log(LEN, MID);
