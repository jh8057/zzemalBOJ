const input = require("fs")
  .readFileSync("../input/2884.txt")
  .toString()
  .split(" ");
let hour = parseInt(input[0]);
let min = parseInt(input[1]);

hour = min > 44 ? hour : hour === 0 ? 23 : hour - 1;
min = min > 44 ? min - 45 : min + 15;

console.log(hour, min);

// if (min > 44) {
//   min = min - 45;
// } else {
//   min = min + 15;
//   if (hour === 0) {
//     hour = 23;
//   } else {
//     hour = hour - 1;
//   }
// }
