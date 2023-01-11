var fs = require("fs");
const input = fs.readFileSync("./input/1924.txt").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
let result = [];
result.push(a + b);
result.push(a - b);
result.push(a * b);
result.push(a / b);
result.push(a % b);
console.log(result.join("\n"));

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
