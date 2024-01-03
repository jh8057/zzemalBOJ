const inputs = require("fs")
  .readFileSync("../input/28278.txt")
  .toString()
  .trim()
  .split("\n");

const stack = [];
inputs.forEach((input) => {
  const [order, num] = input.split(" ");
  if (order === "1") {
    stack.push(num);
  } else if (order === "2") {
    let output = stack.pop() || -1;
    console.log(output);
  } else if (order === "3") {
    console.log(stack.length);
  } else if (order === "4") {
    if (stack.length < 1) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else if (order === "5") {
    let output = stack[stack.length - 1] || -1;
    console.log(output);
  }
});
