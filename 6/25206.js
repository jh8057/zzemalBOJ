const input = require("fs")
  .readFileSync("../input/25206.txt")
  .toString()
  .split("\n");

console.log("input", input);

input.forEach((el) => {
  let [name, num, grade] = el.split(" ");
});
