const inputs = require("fs")
  .readFileSync("../../input/5430.txt")
  .toString()
  .trim()
  .split("\n");

const T = +inputs.shift();
let result = [];

for (let i = 0; i < T; i++) {
  let index = i * 3;
  let order = inputs[index];
  // let cnt = inputs[index + 1];
  let arr = JSON.parse(inputs[index + 2]);

  let flag = true; // true: front , false: back
  let startPoint = 0;
  let endPoint = arr.length;

  order = order.replaceAll("RR", "");
  for (let k = 0; k < order.length; k++) {
    if (order[k] === "D") {
      if (flag) {
        startPoint++;
      } else {
        endPoint--;
      }
    } else if (order[k] === "R") {
      flag = !flag;
    }
  }

  if (startPoint > endPoint) {
    result.push("error");
  } else {
    arr = arr.slice(startPoint, endPoint);
    if (!flag) arr = arr.reverse();
    result.push(JSON.stringify(arr));
  }
}

console.log(result.join("\n"));
