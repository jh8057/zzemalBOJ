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

// const result = new Array(26).fill(0);

// for (let i = 0; i < input.length; i++) {
//   result[input.charCodeAt(i) - 97]++;
// }

// const max = Math.max(...result); // 2
// const index = result.indexOf(max); // 26

// let isSame = false;

// for (let j = 0; j < 26; j++) {
//   if (result[j] === max && index != j) {
//     isSame = true;
//     break;
//   }
// }

// console.log(isSame ? "?" : String.fromCharCode(index + 65));
