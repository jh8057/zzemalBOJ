const input = require("fs")
  .readFileSync("../input/1157.txt")
  .toString()
  .trim()
  .toLocaleLowerCase();

console.log(input);

let obj = {};
for (let i = 0; i < input.length; i++) {
  if (obj[input[i]]) {
    obj[input[i]] += 1;
  } else {
    obj[input[i]] = 1;
  }
}
console.log(obj);

let arr = Object.values(obj);
console.log(arr);
let max = Math.max(...arr);
if (arr.filter((el) => el === max).length !== 1) console.log("?");
