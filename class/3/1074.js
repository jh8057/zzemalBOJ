const inputs = require("fs")
  .readFileSync("../../input/1074.txt")
  .toString()
  .trim()
  .split("\n");

const [N, r, c] = inputs[0].split(" ").map((el) => +el);

const findField = (len, x, y) => {
  let mid = len / 2;

  if (mid > x && mid > y) {
    //1
    return [0, x, y];
  } else if (mid > x && mid <= y) {
    //2
    return [mid * mid, x, y - mid];
  } else if (mid <= x && mid > y) {
    //3
    return [2 * (mid * mid), x - mid, y];
  } else if (mid <= x && mid <= y) {
    //4
    return [3 * (mid * mid), x - mid, y - mid];
  }
};

let length = Math.pow(2, N);
let answer = 0;
let x = r;
let y = c;
while (length >= 1) {
  let [cnt, newX, newY] = findField(length, x, y);
  length /= 2;
  x = newX;
  y = newY;
  answer += cnt;
}

console.log(answer);

//재귀
// function Z(n, x, y) {
//     if (n == 0) return 0;
//     let half = Math.pow(2, n-1);
//     if (x < half && y < half) return Z(n-1, x, y);
//     if (x < half && y >= half) return half * half + Z(n-1, x, y-half);
//     if (x >= half && y < half) return 2 * half * half + Z(n-1, x-half, y);
//     return 3 * half * half + Z(n-1, x-half, y-half);
//   }

//   console.log(Z(N, r, c));
