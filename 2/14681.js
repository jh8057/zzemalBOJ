const input = require("fs")
  .readFileSync("../input/14681.txt") //0으로 해줘야 풀림
  .toString()
  .split("\n");
const x = parseInt(input[0]);
const y = parseInt(input[1]);

if (x > 0) {
  if (y > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (y > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}

// if(x > 0 && y > 0) {
//     // 조건을 조금 더 상세하게 쓰는게 보기도 좋고, 성능도 좋은 것 같다.
// }
