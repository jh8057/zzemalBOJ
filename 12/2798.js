const input = require("fs")
  .readFileSync("../input/2798.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");
const arr = input[1].split(" ").map((el) => +el);

let max = 0;
const checkSum = (index, sum, count) => {
  if (sum > M) {
    if (count === 4) {
      max = Math.max(sum - arr[index - 1], max);
    }
    return;
  }
  if (count === 3) {
    max = Math.max(sum, max);
    return;
  }

  if (index >= N && count < 4) {
    return;
  }
  checkSum(index + 1, sum, count);
  checkSum(index + 1, sum + arr[index], count + 1);
};
checkSum(0, 0, 0);

console.log(max);
