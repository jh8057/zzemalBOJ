const input = require("fs")
  .readFileSync("../input/10988.txt")
  .toString()
  .trim();

const LEN = input.length;
const MID = Math.ceil(LEN / 2);
const MIDFRONT = LEN % 2 === 0 ? MID : MID - 1;

let result = 0;
if (
  input.substring(0, MIDFRONT) ===
  input.substring(MID, LEN).split("").reverse().join("")
) {
  result = 1;
}
console.log(result);
