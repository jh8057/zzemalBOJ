const input = require("fs")
  .readFileSync("../input/10812.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input.shift().split(" ");
let basket = new Array(+N).fill(0).map((el, idx) => idx + 1);

input.forEach((el) => {
  let [start, end, mid] = el.split(" ");
  const tmp = [...basket];
  let target = tmp.slice(start - 1, mid - 1);
  let target2 = tmp.slice(mid - 1, end);
  basket = tmp
    .slice(0, start - 1)
    .concat(target2)
    .concat(target)
    .concat(tmp.slice(end, N));
});

console.log(basket.join(" "));

// for (let i = 0; i < M; i++) {
//   let startIdx = input[i][0] - 1;
//   let endIdx = input[i][1] - 1;
//   let midIdx = input[i][2] - 1;

//   let item = arr.splice(midIdx, endIdx - midIdx + 1); // 회전시킬 숫자를 뽑음
//   arr.splice(startIdx, 0, ...item);
// }
// console.log(arr.join(' '));
