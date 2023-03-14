const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

for (let i = 1; i <= 30; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}
