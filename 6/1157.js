const input = require("fs")
  .readFileSync("../input/1157.txt")
  .toString()
  .trim()
  .toUpperCase();

let obj = {};
for (let i = 0; i < input.length; i++) {
  if (obj[input[i]]) {
    obj[input[i]] += 1;
  } else {
    obj[input[i]] = 1;
  }
}

let key = Object.keys(obj);
let value = Object.values(obj);

let max = Math.max(...value);
if (value.filter((el) => el === max).length !== 1) console.log("?");
else console.log(key[value.indexOf(max)]);
