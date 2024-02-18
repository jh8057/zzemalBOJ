const inputs = require("fs")
  .readFileSync("../input/11509.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(inputs[0]);
const H = inputs[1].split(" ").map((el) => Number(el));

// let answer = 0;
// while (H.length > 0) {
//   let start = H.shift();
//   let indexArr = [];
//   for (let i = 0; i < H.length; i++) {
//     if (H[i] === start - 1) {
//       indexArr.push(i);
//       start--;
//     }
//   }
//   for (let i = indexArr.length - 1; i >= 0; i--) {
//     H.splice(indexArr[i], 1);
//   }
//   answer++;
// }

// console.log(answer);

// O(N^2)
// 100만 * 100만 = 1조 > 루프 2번 돌리면 안됨
// O(N)으로 풀어야 함

// 공간복잡도 => 512MB > 1억개의 int를 담을 수 있음

let answer = 0;
let arrow = new Array(N + 1).fill(0);
for (let i = 0; i < N; i++) {
  if (arrow[H[i]] > 0) {
    arrow[H[i]]--;
    arrow[H[i] - 1]++;
  } else {
    arrow[H[i] - 1]++;
    answer++;
  }
}

console.log("answer", answer);
