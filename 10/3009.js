const input = require("fs")
  .readFileSync("../input/3009.txt")
  .toString()
  .trim()
  .split("\n");

const xArr = [];
const yArr = [];
input.forEach((el) => {
  const [x, y] = el.split(" ");
  if (xArr.includes(x)) {
    let index = xArr.indexOf(x);
    xArr.splice(index, 1);
  } else {
    xArr.push(x);
  }

  if (yArr.includes(y)) {
    let index = yArr.indexOf(y);
    yArr.splice(index, 1);
  } else {
    yArr.push(y);
  }
});

console.log(`${xArr[0]} ${yArr[0]}`);
