const input = require("fs")
  .readFileSync("../input/2525.txt")
  .toString()
  .split("\n");
const [startHour, startMin] = input[0].split(" ");
const duration = parseInt(input[1]);

const hour = Math.floor(duration / 60);
const min = duration % 60;

let resultHour = parseInt(startHour) + hour;
let resultMin = parseInt(startMin) + min;

if (resultMin >= 60) {
  resultHour++;
  resultMin = resultMin - 60;
}

if (resultHour >= 24) {
  resultHour = resultHour - 24;
}
const result = resultHour + " " + resultMin;
console.log(result);

//other
// time = parseInt(a * 60 + (b + c));
// min = parseInt(time % 60);
// hour = parseInt((time / 60) % 24);
// console.log(hour + " " + min);
