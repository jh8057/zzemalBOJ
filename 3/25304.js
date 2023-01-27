let fs = require("fs");
let input = fs.readFileSync("../input/25304.txt").toString().trim().split("\n");

const total = parseInt(input.shift());
const N = parseInt(input.shift());

let sum = 0;
for (let i = 0; i < input.length; i++) {
  let [price, num] = input[i].split(" ");
  sum += price * num;
  console.log(sum);
}

total === sum ? console.log("Yes") : console.log("No");
