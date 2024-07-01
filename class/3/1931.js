const inputs = require("fs")
  .readFileSync("../../input/1913.txt")
  .toString()
  .trim()
  .split("\n");

const N = +inputs.shift();
const arr = inputs.map((el) => el.split(" ").map((e) => +e));

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let selected = [0, 0];
let count = 0;
for (let i = 0; i < N; i++) {
  if (i === 0) {
    selected = arr[i];
    count++;
  } else if (selected[1] <= arr[i][0]) {
    selected = arr[i];
    count++;
  }
}

console.log(count);
