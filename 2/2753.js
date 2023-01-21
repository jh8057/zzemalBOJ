const input1 = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const input = parseInt(input1[0]);

if (input % 4 === 0 && (input % 100 !== 0 || input % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}
